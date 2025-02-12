import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

/**
 * 创建User的Dto
 */
export class CreateUserDto implements Prisma.admin_userCreateInput {
  @ApiProperty()
  avatar: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  nickname: string;

  @ApiProperty()
  active: number;
}
