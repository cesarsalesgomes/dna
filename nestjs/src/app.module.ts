import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { CronsModule } from './crons/cron.module';
import { FeaturesModule } from './features/features.module';
import { MailModule } from './providers/mail/mail.module';
import { ResponseInterceptor } from './system/interceptors/response.interceptor';
import { SystemModule } from './system/system.module';

@Module({
  imports: [SystemModule, CronsModule, FeaturesModule, MailModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule { }
