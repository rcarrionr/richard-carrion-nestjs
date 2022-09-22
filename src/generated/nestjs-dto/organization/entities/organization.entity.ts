import { Status } from '@prisma/client';
import { Tribe } from '../../tribe/entities/tribe.entity';

export class Organization {
  id: bigint;
  name: string;
  status: Status;
  tribes?: Tribe[];
}
