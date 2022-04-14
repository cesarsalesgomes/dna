import {
  TAG_ME_URL, TAG_ME_TOKEN, CASA_DO_PORCO_TAG_ME_ID, ALERT_EMAIL_ADDRESS, ALERT_EMAIL_SUBJECT, CASA_DO_PORCO_NAME
} from '@constants/restaurant-service.constants';
import { AuthService } from '@features/auth/auth.service';
import { RestaurantService } from '@features/restaurant/restaurant.service';
import { Injectable } from '@nestjs/common';
import { GotService } from '@providers/got/got.service';
import { MailService } from '@providers/mail/mail.service';
import { DateUtils } from '@utils/date.utils';
import { DayOfTheWeek } from 'src/enums/date.enums';

import { TagMeRestaurantInfo, TagMeRestaurantReservation } from './restaurant-reservations.interfaces';

@Injectable()
export class RestaurantReservationsService {

  constructor(
    private gotService: GotService,
    private dateUtils: DateUtils,
    private mailService: MailService,
    private authService: AuthService,
    private restaurantService: RestaurantService
  ) { }

  private getTagMeRestaurantReservations(idReservation: string) {
    return this.gotService.get()(
      `${TAG_ME_URL}/ReservationStatus/${idReservation}/availabilityForApp/reservationWidget`,
      {
        headers: {
          apitoken: TAG_ME_TOKEN
        }
      }).json<TagMeRestaurantInfo>();
  }

  private getAvailableDays(reservations: TagMeRestaurantReservation[]) {
    return reservations.filter(({ available }) => available);
  }

  private getDaysOfTheWeekAvailable(days: TagMeRestaurantReservation[]): DayOfTheWeek[] {
    const dates = days.map(({ reservationDay }) => this.dateUtils.stringToDate(reservationDay));

    return dates.map(date => this.dateUtils.getDateDayOfTheWeek(date));
  }

  private checkIfThereIsAWeekendAvailable(days: DayOfTheWeek[]): boolean {
    return !!days.find(day => day === DayOfTheWeek.FRIDAY || day === DayOfTheWeek.SATURDAY || day === DayOfTheWeek.SUNDAY);
  }

  async processTagMeRestauranteReservations() {
    const accessToken = await this.authService.getAccessToken();

    const restaurant = await this.restaurantService.getRestaurantByName(accessToken, CASA_DO_PORCO_NAME);

    if (this.restaurantService.checkIfRestaurantIsActive(restaurant)) {
      const { availabilities } = await this.getTagMeRestaurantReservations(CASA_DO_PORCO_TAG_ME_ID);

      const availableDays = this.getAvailableDays(availabilities);

      const availableDaysOfTheWeek = this.getDaysOfTheWeekAvailable(availableDays);

      if (this.checkIfThereIsAWeekendAvailable(availableDaysOfTheWeek)) {
        await this.mailService.sendEmail({
          to: ALERT_EMAIL_ADDRESS,
          subject: ALERT_EMAIL_SUBJECT,
          text: 'Available'
        });

        this.restaurantService.disableRestaurant(accessToken, restaurant);
      }
    }
  }

}
