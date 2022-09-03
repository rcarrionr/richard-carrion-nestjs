import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from "@nestjs/common";
import { MetricService } from "./metric.service";
import { CreateMetricDto, UpdateMetricDto } from "../generated/nestjs-dto/metric/dto";
import { Response } from "express";

@Controller("metric")
export class MetricController {
  constructor(private readonly metricService: MetricService) {
  }

  @Post()
  create(@Body() createMetricDto: CreateMetricDto) {
    return this.metricService.create(createMetricDto);
  }

  @Get()
  findAll() {
    return this.metricService.findAll();
  }

  @Get(":id/metric-repository")
  repositoryMetricsByTribe(@Param("id") id: string) {
    return this.metricService.repositoryMetricsByTribe({ id: BigInt(id) });
  }


  @Get(":id/metric-repository/export")
  async repositoryMetricsByTribeExport(
    @Param("id") id: string,
    @Res() res: Response
  ) {
    const csv = await this.metricService.repositoryMetricsByTribeExport({ id: BigInt(id) });

    res.set({
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="metricas-${id}.csv"`
    });

    res.send(csv);

  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.metricService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateMetricDto: UpdateMetricDto) {
    return this.metricService.update(+id, updateMetricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metricService.remove(+id);
  }


}
