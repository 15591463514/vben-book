import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsOptional } from 'class-validator';

/**
 * 创建User的Dto
 */
export class CreateUserDto implements Prisma.admin_userCreateInput {
  @ApiProperty({
    description: '头像',
  })
  @IsOptional()
  avatar: string;

  @ApiProperty({
    description: '用户名',
  })
  @IsOptional()
  username: string;

  @ApiProperty({
    description: '密码',
  })
  @IsOptional()
  password: string;

  @ApiProperty({
    description: '角色',
  })
  @IsOptional()
  role: string;

  @ApiProperty({
    description: '昵称',
  })
  @IsOptional()
  nickname: string;

  @ApiProperty({
    description: '是否激活',
  })
  @IsOptional()
  active: number;
}
