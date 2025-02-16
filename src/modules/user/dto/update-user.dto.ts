import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

/**
 * 更新User的Dto
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {}
