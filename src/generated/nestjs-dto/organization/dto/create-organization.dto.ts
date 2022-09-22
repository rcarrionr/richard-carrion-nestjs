import { Status } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganizationDto {
  name: string;
  @ApiProperty({ enum: Status })
  status: Status;
}
