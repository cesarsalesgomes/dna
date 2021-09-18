import { Injectable } from '@nestjs/common';
import { DirectusService } from '@system/directus/directus.service';

@Injectable()
export class CatRepository {
  constructor(private directusService: DirectusService) { }

  async findAll() {
    return (await this.directusService.sdk.findAllCats()).data.cat;
  }
}
