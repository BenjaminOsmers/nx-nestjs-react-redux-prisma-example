import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { BackendApiApiFeatureModule } from '@example/backend/api/api/feature';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    BackendApiApiFeatureModule,
  ],
})
export class BackendShellFeatureModule {}
