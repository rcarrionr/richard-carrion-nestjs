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

  async findAll(): Promise<Organization[]> {
    return this.prismaService.organization.findMany();
  }

  async findOne(where: Prisma.OrganizationWhereUniqueInput): Promise<Organization> {
    return await this.prismaService.organization.findUnique({ where });
  }

  async update(params: {
    where: Prisma.OrganizationWhereUniqueInput;
    data: Prisma.OrganizationUpdateInput;
  }): Promise<Organization> {
    const { data, where } = params;
    return this.prismaService.organization.update({
      data,
      where
    });

  }

  async remove(where: Prisma.OrganizationWhereUniqueInput): Promise<Organization> {
    return this.prismaService.organization.delete({
      where
    });
  }
}
