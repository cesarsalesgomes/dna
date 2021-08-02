import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';

@Module({
  imports: [HttpModule],
  controllers: [SystemController],
  providers: [SystemService],
})
export class SystemModule { }
