import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './common/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 注册swagger
  initSwagger(app);
  // 启动应用
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
