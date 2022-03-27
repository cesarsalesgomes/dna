import {
  TAG_ME_URL, TAG_ME_TOKEN, CASA_DO_PORCO_TAG_ME_ID, ALERT_EMAIL_ADDRESS, ALERT_EMAIL_SUBJECT
} from '@constants/restaurant-service.constants';
import { Injectable } from '@nestjs/common';
import { GotService } from '@providers/got/got.service';
import { MailService } from '@providers/mail/mail.service';
import { DateUtils } from '@utils/date.utils';
import { DayOfTheWeek } from 'src/enums/date.enums';

import { TagMeRestaurantInfo, TagMeRestaurantReservation } from './restaurant-reservations.interfaces';

@Injectable()
export class RestaurantReservationsService {

  constructor(private gotService: GotService, private dateUtils: DateUtils, private mailService: MailService) { }

  getTagMeRestauranteReservations(idReservation: string) {
    return this.gotService.get()(
      `${TAG_ME_URL}/ReservationStatus/${idReservation}/availabilityForApp/reservationWidget`,
      {
        headers: {
          apitoken: TAG_ME_TOKEN
        }
      }).json<TagMeRestaurantInfo>();
  }

  getAvailableDays(reservations: TagMeRestaurantReservation[]) {
    return reservations.filter(({ available }) => available);
  }

  getDaysOfTheWeekAvailable(days: TagMeRestaurantReservation[]): DayOfTheWeek[] {
    const dates = days.map(({ reservationDay }) => this.dateUtils.stringToDate(reservationDay));

    return dates.map(date => this.dateUtils.getDateDayOfTheWeek(date));
  }

  checkIfThereIsAWeekendAvailable(days: DayOfTheWeek[]): boolean {
    return !!days.find(day => day === DayOfTheWeek.FRIDAY || day === DayOfTheWeek.SATURDAY || day === DayOfTheWeek.SUNDAY);
  }

  async processTagMeRestauranteReservations() {
    const { availabilities } = await this.getTagMeRestauranteReservations(CASA_DO_PORCO_TAG_ME_ID);

    const availableDays = this.getAvailableDays(availabilities);

    const availableDaysOfTheWeek = this.getDaysOfTheWeekAvailable(availableDays);

    if (this.checkIfThereIsAWeekendAvailable(availableDaysOfTheWeek)) {
      await this.mailService.sendEmail({
        to: ALERT_EMAIL_ADDRESS,
        subject: ALERT_EMAIL_SUBJECT,
        text: 'Available'
      });
    }
  }

}
