import { Module } from '@nestjs/common';
import { SystemModule } from './system/system.module';
import { CatModule } from './cat/cat.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './system/interceptors/response.interceptor';

@Module({
  imports: [SystemModule, CatModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule { }
