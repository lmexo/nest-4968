import { Module } from '@nestjs/common';
import { UpgradeGateway } from './upgrade.gateway';
import { DedicatedGateway } from './dedicated.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [UpgradeGateway, DedicatedGateway],
})
export class AppModule {}
