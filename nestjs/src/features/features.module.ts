import { Module } from '@nestjs/common';

import { CatModule } from './cat/cat.module';

@Module({
  imports: [CatModule]
})
export class FeaturesModule { }
