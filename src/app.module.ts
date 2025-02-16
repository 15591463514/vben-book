import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { BookModule } from './modules/book/book.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './common/interceptors';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, BookModule],
  providers: [{ provide: APP_INTERCEPTOR, useClass: TransformInterceptor }],
})
export class AppModule {}
