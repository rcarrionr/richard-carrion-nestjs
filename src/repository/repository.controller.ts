import { Body, Controller, Get, Post } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { Prisma } from '@prisma/client';
import { CreateRepositoryDto } from '../generated/nestjs-dto/repository/dto';

@Controller('repository')
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}

  @Post()
  create(@Body() createRepositoryDto: CreateRepositoryDto) {
    return this.repositoryService.create(createRepositoryDto);
  }

  @Get()
  findAll() {
    return this.repositoryService.findAll();
  }
}
