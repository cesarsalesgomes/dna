import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { RestaurantReservationsModule } from 'src/features/restaurant-reservations/restaurant-reservations.module';

import { RestaurantReservationsCron } from './restaurant-reservations/restaurant-reservations.cron';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    RestaurantReservationsModule
  ],
  providers: [RestaurantReservationsCron],
})
export class CronsModule { }
