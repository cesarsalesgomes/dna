import {
  RestaurantReservationsService
} from '@features/restaurant-reservations/restaurant-reservations.service';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class RestaurantReservationsCron {
  constructor(private restaurantReservationsService: RestaurantReservationsService) { }

  @Cron(CronExpression.EVERY_10_MINUTES)
  handleCron() {
    this.restaurantReservationsService.processTagMeRestauranteReservations();
  }
}
