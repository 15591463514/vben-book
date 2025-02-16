import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  /**
   * 登录
   */
  async login(loginDto: any) {
    const { username, password } = loginDto;
    const user = await this.userService.findOne(username);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  /**
   * 注册
   */
  async register(loginDto: any) {
    return this.userService.create(loginDto);
  }

  /**
   * 获取用户信息
   */
  async profile(username: string) {
    return this.userService.findOne(username);
  }
}
