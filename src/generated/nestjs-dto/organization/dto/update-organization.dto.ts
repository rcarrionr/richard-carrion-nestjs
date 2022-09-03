import { Status } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";


export class UpdateOrganizationDto {
  name?: string;
  @ApiProperty({ enum: Status })
  status?: Status;
}
