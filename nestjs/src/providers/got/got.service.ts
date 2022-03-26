import { Injectable } from '@nestjs/common';
import Got from 'got';

@Injectable()
export class GotService {
  private got: typeof Got;

  constructor() {
    this.got = Got;
  }

  get() {
    return this.got.get;
  }

}
