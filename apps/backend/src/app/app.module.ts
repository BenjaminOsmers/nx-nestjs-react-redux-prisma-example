import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BackendShellFeatureModule } from '@example/backend/shell/feature';

@Module({
  imports: [BackendShellFeatureModule, ConfigModule.forRoot()],
})
export class AppModule {}
