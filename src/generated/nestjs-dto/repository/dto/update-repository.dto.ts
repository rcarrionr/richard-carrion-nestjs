import { State, Status } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRepositoryDto {
  name?: string;
  @ApiProperty({ enum: State })
  state?: State;
  @ApiProperty({ enum: Status })
  status?: Status;
}
