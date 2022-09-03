import { Status } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";


export class Organization {
  id: bigint;
  name: string;
  @ApiProperty({ enum: Status })
  status: Status;
}
