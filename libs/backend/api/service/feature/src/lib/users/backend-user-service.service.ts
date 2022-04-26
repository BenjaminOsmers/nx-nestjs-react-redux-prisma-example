import { User } from '@example/backend/api/api/shared/entities/data-access';
import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAllUsersQuery } from './queries/backend-user-query.query';

@Injectable()
export class UserService {
  constructor(private readonly queryBus: QueryBus) {}

  async getAllUsers(): Promise<User[]> {
    return await this.queryBus.execute(new GetAllUsersQuery());
  }
}
