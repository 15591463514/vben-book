import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { ApiResult, Public } from 'src/common/decorators';
import { User } from '../user/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @ApiOperation({ summary: '登录' })
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Public()
  @ApiOperation({ summary: '注册' })
  @Post('register')
  register(@Body() loginDto: LoginDto) {
    return this.authService.register(loginDto);
  }

  @ApiOperation({ summary: '获取用户信息' })
  @ApiResult({ type: User })
  @Post('profile')
  profile(@Req() request: Request) {
    return this.authService.profile(request['user'].username);
  }
}
