import { Module } from "@nestjs/common";
import { TribeService } from "./tribe.service";
import { TribeController } from "./tribe.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [TribeController],
  providers: [
    TribeService,
    PrismaService
  ]
})
export class TribeModule {
}
