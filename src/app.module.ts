import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationModule } from './organization/organization.module';
import { TribeModule } from './tribe/tribe.module';

@Module({
  imports: [OrganizationModule, TribeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
