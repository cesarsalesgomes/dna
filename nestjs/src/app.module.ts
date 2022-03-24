import { Module } from '@nestjs/common';
import { SystemModule } from './system/system.module';
import { CatModule } from './cat/cat.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './system/interceptors/response.interceptor';
import { CronsModule } from './crons/cron.module';
import { RestaurantReservationsModule } from '@modules/restaurant-reservations/restaurant-reservations.module';

@Module({
  imports: [SystemModule, CatModule, CronsModule, RestaurantReservationsModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule { }
