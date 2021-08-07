import { Injectable } from '@nestjs/common';
import { Cat } from 'graphql-schema';

@Injectable()
export class CatService {
  async findAll(): Promise<Cat[]> {
    return [{ id: '1', name: 'Charlotte' }];
  }
}
