import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from '@example/backend/api/service/feature';
import { User } from '@example/backend/api/api/shared/entities/data-access';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }
}
