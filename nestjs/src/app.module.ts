import { RestaurantReservationsModule } from '@modules/restaurant-reservations/restaurant-reservations.module';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { CatModule } from './cat/cat.module';
import { CronsModule } from './crons/cron.module';
import { ResponseInterceptor } from './system/interceptors/response.interceptor';
import { SystemModule } from './system/system.module';

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
