import { Injectable } from '@nestjs/common';

import { CatRepository } from './cat.repository';
import { Scalars } from './cat.sdk';

@Injectable()
export class CatService {
  constructor(private catRepository: CatRepository) { }

  async findAll(accessToken: string) {
    return this.catRepository.findAll(accessToken);
  }

  async findById(accessToken: string, id: Scalars['ID']) {
    return this.catRepository.findById(accessToken, id);
  }
}
