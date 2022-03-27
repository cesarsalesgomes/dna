import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';

@Injectable()
export class DateUtils {
  stringToDate(date: string): Date {
    return dayjs(date).toDate();
  }

  getDateDayOfTheWeek(date: Date) {
    return dayjs(date).day();
  }
}
