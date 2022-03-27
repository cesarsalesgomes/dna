import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';

import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
        },
        port: Number(process.env.MAIL_PORT)
      },
      defaults: {
        from: process.env.MAIL_FROM,
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule { }
