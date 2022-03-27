import { Module } from '@nestjs/common';
import { GotService } from '@providers/got/got.service';
import { MailModule } from '@providers/mail/mail.module';
import { DateUtils } from '@utils/date.utils';

import { RestaurantReservationsService } from './restaurant-reservations/restaurant-reservations.service';

@Module({
  imports: [MailModule],
  providers: [RestaurantReservationsService, GotService, DateUtils],
  exports: [RestaurantReservationsService],
})
export class RestaurantReservationsModule { }
