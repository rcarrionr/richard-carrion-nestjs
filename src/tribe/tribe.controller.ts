import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TribeService } from "./tribe.service";
import { CreateTribeDto, UpdateTribeDto } from "../generated/nestjs-dto/tribe/dto";

@Controller("tribe")
export class TribeController {
  constructor(private readonly tribeService: TribeService) {
  }

  @Post()
  create(@Body() createTribeDto: CreateTribeDto) {
    return this.tribeService.create(createTribeDto);
  }

  @Get()
  findAll() {
    return this.tribeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tribeService.findOne({ id: BigInt(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTribeDto: UpdateTribeDto) {
    return this.tribeService.update({ where: { id: BigInt(id) }, data: updateTribeDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tribeService.remove({ id: BigInt(id) });
  }
}
