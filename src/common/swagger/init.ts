import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ResOp } from '../model/response.model';

export function initSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('vben-book')
    .setDescription('book-management')
    .setVersion('1.0')
    .addTag('nest')
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, config, {
      extraModels: [ResOp],
    });
  SwaggerModule.setup('api', app, documentFactory, {
    jsonDocumentUrl: '/api-json',
  });
}
