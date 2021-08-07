import { Module } from '@nestjs/common';
import { SystemModule } from './system/system.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [SystemModule, CatModule],
})
export class AppModule { }
