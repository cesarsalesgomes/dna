import { NestFactory } from '@nestjs/core';
import logger from '@system/logger/logger.service';

import { AppModule } from './app.module';
import ExceptionFilterImplementation from './system/exception/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger });

  /**
   * Feature 0.2.0: NestJS & Directus Exception Handling
   */
  app.useGlobalFilters(new ExceptionFilterImplementation());

  /* Set all routes with 'nestjs' prefix */
  app.setGlobalPrefix('nestjs');

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
