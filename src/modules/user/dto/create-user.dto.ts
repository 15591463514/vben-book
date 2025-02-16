import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

/**
 * 创建User的Dto
 */
export class CreateUserDto implements Prisma.admin_userCreateInput {
  @ApiProperty({
    description: '头像',
  })
  @IsNotEmpty()
  avatar: string;

  @ApiProperty({
    description: '用户名',
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: '密码',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: '角色',
  })
  @IsNotEmpty()
  role: string;

  @ApiProperty({
    description: '昵称',
  })
  @IsNotEmpty()
  nickname: string;

  @ApiProperty({
    description: '是否激活',
  })
  @IsNotEmpty()
  active: number;
}
