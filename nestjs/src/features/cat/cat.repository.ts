import { Injectable } from '@nestjs/common';
import { DirectusService } from '@system/directus/directus.service';

import { getSdk, Scalars } from './cat.sdk';

@Injectable()
export class CatRepository {
  constructor(private directusService: DirectusService) { }

  getCatSdk(accessToken: string) {
    return getSdk(this.directusService.getGraphqlClient(accessToken));
  }

  async findAll(accessToken: string) {
    return (await this.getCatSdk(accessToken).findAllCats()).data.cat;
  }

  async findById(accessToken: string, id: Scalars['ID']) {
    return (await this.getCatSdk(accessToken).catById({ data: id })).data.cat_by_id;
  }
}
