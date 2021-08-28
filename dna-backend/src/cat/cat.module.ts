import { Module } from '@nestjs/common';
import { SystemModule } from 'src/system/system.module';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { CatRepository } from './cat.repository';

@Module({
  imports: [SystemModule],
  controllers: [CatController],
  providers: [CatService, CatRepository],
})
export class CatModule { }
