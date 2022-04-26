import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from '@example/backend/api/service/feature';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [String])
  getAllUsers(): string[] {
    return this.userService.getAllUsers();
  }
}
