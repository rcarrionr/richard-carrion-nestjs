import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { OrganizationService } from "./organization.service";
import { CreateOrganizationDto, UpdateOrganizationDto } from "../generated/nestjs-dto/organization/dto";


@Controller("organization")
export class OrganizationController {

  constructor(private readonly organizationService: OrganizationService) {
  }

  @Post()
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationService.create(createOrganizationDto);
  }

  @Get()
  findAll() {
    return this.organizationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationService.findOne({ id: BigInt(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationService.update({ where: { id: BigInt(id) }, data: updateOrganizationDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationService.remove({ id: BigInt(id) });
  }
}
