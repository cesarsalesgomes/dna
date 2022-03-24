import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RestaurantReservationsService } from './restaurant-reservations/restaurant-reservations.service';

@Module({
  imports: [HttpModule],
  providers: [RestaurantReservationsService],
  exports: [RestaurantReservationsService]
})
export class RestaurantReservationsModule { }
