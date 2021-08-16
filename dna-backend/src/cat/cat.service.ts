import { Injectable } from '@nestjs/common';
import { DirectusService } from 'src/system/directus/directus.service';

@Injectable()
export class CatService {
  constructor(private directusService: DirectusService) { }

  async findAll() {
    const { data } = await this.directusService.sdk.findAllCats();

    return data.cat;
  }
}
