import { Module } from '@nestjs/common';
import { UsersResolver } from './users/backend-api-users-resolver.resolver';
import { UserService } from '@example/backend/api/service/feature';

@Module({
  controllers: [],
  providers: [UsersResolver, UserService],
  exports: [],
})
export class BackendApiApiFeatureModule {}
