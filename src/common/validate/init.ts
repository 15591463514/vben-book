import { INestApplication, ValidationPipe } from '@nestjs/common';

export function initValidate(app: INestApplication) {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 负载转换为根据其 DTO 类类型化的对象
      whitelist: true, // 过滤掉请求对象中不存在的属性
    }),
  );
}
