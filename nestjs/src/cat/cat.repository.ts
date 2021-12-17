import { Injectable } from '@nestjs/common';
import { DirectusService } from '@system/directus/directus.service';

@Injectable()
export class CatRepository {
  constructor(private directusService: DirectusService) { }

  async findAll(accessToken: string) {
    return (await this.directusService.getSdk(accessToken).findAllCats()).data.cat;
  }
}
