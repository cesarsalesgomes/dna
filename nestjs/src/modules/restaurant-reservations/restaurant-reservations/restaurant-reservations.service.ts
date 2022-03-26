import { TAG_ME_URL, TAG_ME_TOKEN, CASA_DO_PORCO_TAG_ME_ID } from '@constants/restaurant-service.constants';
import { Injectable } from '@nestjs/common';
import got from 'got';

import { TagMeRestaurantInfo } from './restaurant-reservations.interfaces';

@Injectable()
export class RestaurantReservationsService {

  getTagMeRestauranteReservations(idReservation: string) {
    return got.get(
      `${TAG_ME_URL}/ReservationStatus/${idReservation}/availabilityForApp/reservationWidget`,
      {
        headers: {
          apitoken: TAG_ME_TOKEN
        }
      }).json<TagMeRestaurantInfo>();
  }

  async processTagMeRestauranteReservations() {
    const { availabilities } = await this.getTagMeRestauranteReservations(CASA_DO_PORCO_TAG_ME_ID);
  }
}
