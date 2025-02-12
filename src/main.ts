import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './common/swagger/init';
import { initValidate } from './common/validate/init';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 注册swagger
  initSwagger(app);
  // 注册validate
  initValidate(app);
  // 启动应用
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
