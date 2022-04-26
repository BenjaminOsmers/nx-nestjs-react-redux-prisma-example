import { Module } from '@nestjs/common';
import { UsersResolver } from './users/backend-api-users-resolver.resolver';
import {
  GetAllUsersQueryHandler,
  UserService,
} from '@example/backend/api/service/feature';
import { PrismaService } from '@example/backend/shared/services/prisma/data-access';
import { UserRepository } from '@example/backend/api/repository/data-access';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  providers: [
    UserRepository,
    UsersResolver,
    UserService,
    GetAllUsersQueryHandler,
    PrismaService,
  ],
  exports: [],
})
export class BackendApiApiFeatureModule {}
