import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
  RestaurantReservationsService
} from 'src/features/restaurant-reservations/restaurant-reservations/restaurant-reservations.service';

@Injectable()
export class RestaurantReservationsCron {
  constructor(private restaurantReservationsService: RestaurantReservationsService) { }

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    this.restaurantReservationsService.processTagMeRestauranteReservations();
  }
}
