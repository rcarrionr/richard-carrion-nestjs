import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateMetricDto, UpdateMetricDto } from "../generated/nestjs-dto/metric/dto";
import { PrismaService } from "../prisma/prisma.service";
import { endOfYear, startOfYear } from "date-fns";
import { State } from "@prisma/client";

const { Parser } = require("json2csv");


@Injectable()
export class MetricService {
  constructor(private readonly prismaService: PrismaService) {
  }

  create(createMetricDto: CreateMetricDto) {
    return "This action adds a new metric";
  }

  findAll() {
    return `This action returns all metric`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metric`;
  }

  update(id: number, updateMetricDto: UpdateMetricDto) {
    return `This action updates a #${id} metric`;
  }

  remove(id: number) {
    return `This action removes a #${id} metric`;
  }

  async repositoryMetricsByTribe(param: { id: bigint }) {

    try {
      await this.prismaService.tribe.findUniqueOrThrow({
          where: { id: param.id }
        }
      );
    } catch (e) {
      throw new HttpException("La tribu no se encuentra registrada", HttpStatus.NOT_FOUND);
    }


    let findMany = await this.prismaService.repository.findMany({
      where: {
        tribeId: BigInt(param.id),
        state: State.Enable,
        createdAt: {
          lte: endOfYear(new Date()),
          gte: startOfYear(new Date())
        },
        metrics: {
          coverange: {
            gt: 75
          }
        }
      },
      include: {
        metrics: true,
        tribe: {
          include: {
            organization: true
          }
        }
      }
    });
    if (findMany.length === 0) {
      throw new HttpException("La tribu no tiene repositorios que cumpla con la cobertura", HttpStatus.NOT_FOUND);
    }
    return findMany.map(e => ({
      id: e.id,
      name: e.name,
      tribe: e.tribe.name,
      organization: e.tribe.organization.name,
      coverange: e.metrics.coverange,
      codeSmells: e.metrics.codeSmells,
      bugs: e.metrics.bugs,
      vulnerabilities: e.metrics.vulnerabilities,
      hotspots: e.metrics.hotspots,
      state: e.state
    }));
  }

  async repositoryMetricsByTribeExport(param: { id: bigint }) {
    const data = await this.repositoryMetricsByTribe(param);
    const json2csvParser = new Parser();
    const csv: string = json2csvParser.parse(data);
    return csv;

  }
}
