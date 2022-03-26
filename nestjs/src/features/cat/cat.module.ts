import { Module } from '@nestjs/common';
import { SystemModule } from '@system/system.module';

import { CatController } from './cat.controller';
import { CatRepository } from './cat.repository';
import { CatService } from './cat.service';

@Module({
  imports: [SystemModule],
  controllers: [CatController],
  providers: [CatService, CatRepository],
})
export class CatModule { }
