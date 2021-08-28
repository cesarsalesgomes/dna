import { Injectable } from '@nestjs/common';
import { CatRepository } from './cat.repository';

@Injectable()
export class CatService {
  constructor(private catRepository: CatRepository) { }

  async findAll() {
    return this.catRepository.findAll();
  }
}
