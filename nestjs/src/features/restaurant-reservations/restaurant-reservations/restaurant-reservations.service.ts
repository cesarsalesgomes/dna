import { TAG_ME_URL, TAG_ME_TOKEN, CASA_DO_PORCO_TAG_ME_ID } from '@constants/restaurant-service.constants';
import { Injectable } from '@nestjs/common';
import { GotService } from '@providers/got/got.service';

import { TagMeRestaurantInfo } from './restaurant-reservations.interfaces';

@Injectable()
export class RestaurantReservationsService {

  constructor(private gotService: GotService) { }

  getTagMeRestauranteReservations(idReservation: string) {
    return this.gotService.get()(
      `${TAG_ME_URL}/ReservationStatus/${idReservation}/availabilityForApp/reservationWidget`,
      {
        headers: {
          apitoken: TAG_ME_TOKEN
        }
      }).json<TagMeRestaurantInfo>();
  }

  async processTagMeRestauranteReservations() {
    const { availabilities } = await this.getTagMeRestauranteReservations(CASA_DO_PORCO_TAG_ME_ID);

    console.log(availabilities);
  }
}
