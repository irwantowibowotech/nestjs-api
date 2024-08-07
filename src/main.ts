import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';
import { CustomResponseInterceptor } from './common/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use interceptor
  app.useGlobalInterceptors(new CustomResponseInterceptor());

  const port = process.env.PORT || 9000;
  await app.listen(port, () => log(`Server running on port ${port}`));
}
bootstrap();
