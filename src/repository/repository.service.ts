import { Injectable } from '@nestjs/common';
import { CreateRepositoryDto } from '../generated/nestjs-dto/repository/dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Repository } from '../generated/nestjs-dto/repository/entities';

@Injectable()
export class RepositoryService {
  constructor(private readonly prismaService: PrismaService) {}

  create(
    data: CreateRepositoryDto, //Prisma.RepositoryUncheckedCreateInput,
  ): Promise<CreateRepositoryDto> {
    return this.prismaService.repository.create({
      data: {
        ...data,
        tribeId: BigInt(data.tribeId),
      } as Prisma.RepositoryUncheckedCreateInput,
    });
  }

  findAll() {
    return this.prismaService.repository.findMany({
      select: {
        id: true,
        state: true,
      },
    });
  }

  findOne(where: Prisma.RepositoryWhereUniqueInput): Promise<Repository> {
    return this.prismaService.repository.findUnique({ where });
  }

  update(params: {
    where: Prisma.RepositoryWhereUniqueInput;
    data: Prisma.RepositoryUpdateInput;
  }): Promise<Repository> {
    const { data, where } = params;
    return this.prismaService.repository.update({
      data,
      where,
    });
  }

  remove(where: Prisma.RepositoryWhereUniqueInput): Promise<Repository> {
    return this.prismaService.repository.delete({
      where,
    });
  }
}
