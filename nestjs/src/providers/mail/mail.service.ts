import { MailerService, ISendMailOptions } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) { }

  sendEmail(options: ISendMailOptions) {
    return this.mailerService.sendMail(options);
  }
}
