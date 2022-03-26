import { Module } from '@nestjs/common';

import { RestaurantReservationsService } from './restaurant-reservations/restaurant-reservations.service';

@Module({
  providers: [RestaurantReservationsService],
  exports: [RestaurantReservationsService]
})
export class RestaurantReservationsModule { }
