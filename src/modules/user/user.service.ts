import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.admin_user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.prisma.admin_user.findMany();
  }

  findOne(username: string) {
    return this.prisma.admin_user.findUnique({
      where: {
        username,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.admin_user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
