import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async login(loginDto: any) {
    const user = await this.userService.findOne(loginDto.username);
    // 用户不存在
    if (!user) {
      return {
        code: 1,
        message: '用户不存在',
      };
    }
    // 密码错误
    if (user?.password !== loginDto.password) {
      return {
        code: 1,
        message: '密码错误',
      };
    }
    return {
      code: 0,
      message: '登录成功',
      data: user,
    };
  }
}
