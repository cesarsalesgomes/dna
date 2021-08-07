import { Controller, Get } from '@nestjs/common';
import { Cat } from 'graphql-schema';
import { CatService } from './cat.service';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) { }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}
