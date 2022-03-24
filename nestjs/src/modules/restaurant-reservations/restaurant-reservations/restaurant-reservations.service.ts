import { TAG_ME_URL, TAG_ME_TOKEN, CASA_DO_PORCO_TAG_ME_ID } from '@constants/restaurant-service.constants';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable()
export class RestaurantReservationsService {
  constructor(private httpService: HttpService) { }

  processGetTagMeRestauranteReservations() {
    this.getTagMeRestauranteReservations(CASA_DO_PORCO_TAG_ME_ID).pipe(
      map((data) => data),
      take(1)
    ).subscribe((data) => {
      console.log(data);
    })
  }

  getTagMeRestauranteReservations(idReservation: string): Observable<AxiosResponse<any>> {
    return this.httpService.get(`${TAG_ME_URL}/ReservationStatus/${idReservation}/availabilityForApp/reservationWidget`, {
      headers: {
        apitoken: TAG_ME_TOKEN
      }
    })
  }
}
