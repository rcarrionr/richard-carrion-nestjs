import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationModule } from './organization/organization.module';
import { TribeModule } from './tribe/tribe.module';
import { RepositoryModule } from './repository/repository.module';
import { MetricModule } from './metric/metric.module';

@Module({
  imports: [OrganizationModule, TribeModule, RepositoryModule, MetricModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
