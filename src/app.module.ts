import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { OrganizationModule } from "./organization/organization.module";
import { TribeModule } from "./tribe/tribe.module";
import { RepositoryModule } from "./repository/repository.module";
import { MetricModule } from "./metric/metric.module";
import { PrismaService } from "./prisma/prisma.service";

@Module({
  imports: [OrganizationModule, TribeModule, RepositoryModule, MetricModule],
  controllers: [AppController],
  providers: [PrismaService]
})
export class AppModule {
}
