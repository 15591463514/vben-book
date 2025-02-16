import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { ApiResult } from '../../common/decorators';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '创建用户' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: '获取所有用户' })
  @ApiResult({ type: [User], isPage: true })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: '获取单个用户' })
  @ApiResult({ type: User })
  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.userService.findOne(username);
  }

  @ApiOperation({ summary: '更新用户' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: '删除用户' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
