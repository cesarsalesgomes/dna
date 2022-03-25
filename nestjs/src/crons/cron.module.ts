import { RestaurantReservationsModule } from '@modules/restaurant-reservations/restaurant-reservations.module';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { RestaurantReservationsCron } from './restaurant-reservations/restaurant-reservations.cron';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    RestaurantReservationsModule
  ],
  providers: [RestaurantReservationsCron],
})
export class CronsModule { }
