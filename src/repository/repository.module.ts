import { Module } from "@nestjs/common";
import { RepositoryService } from "./repository.service";
import { RepositoryController } from "./repository.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [RepositoryController],
  providers: [
    RepositoryService,
    PrismaService
  ]
})
export class RepositoryModule {
}
