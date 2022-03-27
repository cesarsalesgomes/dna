import { Module } from '@nestjs/common';
import { GotService } from '@providers/got/got.service';
import { DateUtils } from '@utils/date.utils';

import { RestaurantReservationsService } from './restaurant-reservations/restaurant-reservations.service';

@Module({
  providers: [RestaurantReservationsService, GotService, DateUtils],
  exports: [RestaurantReservationsService],
})
export class RestaurantReservationsModule { }
