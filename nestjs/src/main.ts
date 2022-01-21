import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ExceptionFilterImplementation from './system/exception/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Feature 0.2.0: NestJS & Directus Exception Handling
   */
  app.useGlobalFilters(new ExceptionFilterImplementation());

  await app.listen(process.env.PORT || 3000);
}

bootstrap();