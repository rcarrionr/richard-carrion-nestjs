import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Organization } from "../generated/nestjs-dto/organization/entities";
import { Prisma } from "@prisma/client";

@Injectable()
export class OrganizationService {

  constructor(private readonly prismaService: PrismaService) {
  }

  create(data: Prisma.OrganizationCreateInput): Promise<Organization> {
    return this.prismaService.organization.create({
      data
    });
  }

  findAll(): Promise<Organization[]> {
    return this.prismaService.organization.findMany();
  }

  findOne(where: Prisma.OrganizationWhereUniqueInput): Promise<Organization> {
    return this.prismaService.organization.findUnique({ where });
  }

  update(params: {
    where: Prisma.OrganizationWhereUniqueInput;
    data: Prisma.OrganizationUpdateInput;
  }): Promise<Organization> {
    const { data, where } = params;
    return this.prismaService.organization.update({
      data,
      where
    });
  }

  remove(where: Prisma.OrganizationWhereUniqueInput): Promise<Organization> {
    return this.prismaService.organization.delete({
      where
    });
  }
}
