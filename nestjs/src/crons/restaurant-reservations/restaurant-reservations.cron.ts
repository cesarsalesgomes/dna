
import { RestaurantReservationsService } from '@modules/restaurant-reservations/restaurant-reservations/restaurant-reservations.service';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class RestaurantReservationsCron {
  constructor(private restaurantReservationsService: RestaurantReservationsService) { }

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    this.restaurantReservationsService.processGetTagMeRestauranteReservations();
  }
}
