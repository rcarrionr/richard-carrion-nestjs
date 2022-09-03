import { Injectable } from "@nestjs/common";
import { CreateTribeDto } from "../generated/nestjs-dto/tribe/dto";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";
import { Tribe } from "../generated/nestjs-dto/tribe/entities";

@Injectable()
export class TribeService {

  constructor(private readonly prismaService: PrismaService) {
  }

  create(data: Prisma.TribeUncheckedCreateInput | CreateTribeDto): Promise<CreateTribeDto> {
    let organizationId: bigint = BigInt("");
    if (data instanceof CreateTribeDto) {
      organizationId = BigInt(data.organizationId);
    } else {
      data.organizationId = BigInt(data.organizationId);
    }
    return this.prismaService.tribe.create({
      data: {
        organizationId: organizationId,
        ...data
      } as Prisma.TribeUncheckedCreateInput
    });
  }

  findAll(): Promise<Tribe[]> {
    return this.prismaService.tribe.findMany();
  }

  findOne(where: Prisma.TribeWhereUniqueInput): Promise<Tribe> {
    return this.prismaService.tribe.findUnique({ where });
  }

  update(params: {
    where: Prisma.TribeWhereUniqueInput;
    data: Prisma.TribeUpdateInput;
  }): Promise<Tribe> {
    const { data, where } = params;
    return this.prismaService.tribe.update({
      data,
      where
    });
  }

  remove(where: Prisma.TribeWhereUniqueInput): Promise<Tribe> {
    return this.prismaService.tribe.delete({
      where
    });
  }
}
