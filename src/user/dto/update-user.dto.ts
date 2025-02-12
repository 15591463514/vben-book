import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

/**
 * 更新User的Dto
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {}
