import { Injectable } from '@nestjs/common';
import { PrismaService } from '@example/backend/shared/services/prisma/data-access';
import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async userLogin(email: string, password: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (isPasswordValid) {
        return user;
      }
    }
  }

  async registerUser(user: User): Promise<User> {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, salt);

    return this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async updateUser(user: User): Promise<User> {
    return this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }

  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
