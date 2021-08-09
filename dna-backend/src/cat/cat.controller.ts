import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) { }

  @Get()
  async findAll() {
    return this.catService.findAll();
  }
}
