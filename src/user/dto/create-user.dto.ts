import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

/**
 * 创建User的Dto
 */
export class CreateUserDto implements Prisma.admin_userCreateInput {
  @ApiProperty({
    description: '头像',
  })
  avatar: string;

  @ApiProperty({
    description: '用户名',
  })
  username: string;

  @ApiProperty({
    description: '密码',
  })
  password: string;

  @ApiProperty({
    description: '角色',
  })
  role: string;

  @ApiProperty({
    description: '昵称',
  })
  nickname: string;

  @ApiProperty({
    description: '是否激活',
  })
  active: number;
}
