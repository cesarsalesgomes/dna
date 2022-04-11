import { Injectable } from '@nestjs/common';
import { DirectusService } from '@system/directus/directus.service';

import { getSdk } from './cat.sdk';

@Injectable()
export class CatRepository {
  constructor(private directusService: DirectusService) { }

  getCatSdk(accessToken: string) {
    return getSdk(this.directusService.getGraphqlClient(accessToken));
  }

  async findAll(accessToken: string) {
    return (await this.getCatSdk(accessToken).findAllCats()).data.cat;
  }
}
