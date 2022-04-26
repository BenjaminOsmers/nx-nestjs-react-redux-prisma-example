import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllUsersQuery } from './backend-user-query.query';
import { UserRepository } from '@example/backend/api/repository/data-access';
import { User } from '@prisma/client';

@QueryHandler(GetAllUsersQuery)
export class GetAllUsersQueryHandler
  implements IQueryHandler<GetAllUsersQuery>
{
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }
}
