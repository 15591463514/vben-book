import { Global, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth.constast';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Global()
@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      // 获取.env配置的过期时间
      signOptions: { expiresIn: process.env.JWT_EXPIRE },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
