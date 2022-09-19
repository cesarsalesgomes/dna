import { Controller, Get, Param } from '@nestjs/common';
import { AccessToken } from '@system/decorators/access-token.decorator';

import { CatService } from './cat.service';

@Controller('/cats')
export class CatController {
  constructor(private catService: CatService) { }

  @Get()
  async findAll(@AccessToken() accessToken: string) {
    return this.catService.findAll(accessToken);
  }

  @Get(':id')
  async findById(@AccessToken() accessToken: string, @Param() params: { id: string }) {
    return this.catService.findById(accessToken, params?.id);
  }
}
