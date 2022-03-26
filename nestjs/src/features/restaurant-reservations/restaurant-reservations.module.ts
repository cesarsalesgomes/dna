import { Module } from '@nestjs/common';
import { GotService } from '@providers/got/got.service';

import { RestaurantReservationsService } from './restaurant-reservations/restaurant-reservations.service';

@Module({
  providers: [RestaurantReservationsService, GotService],
  exports: [RestaurantReservationsService],
})
export class RestaurantReservationsModule { }
