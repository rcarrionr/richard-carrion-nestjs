import { State, Status } from "@prisma/client";
import { Tribe } from "../../tribe/entities/tribe.entity";
import { Metric } from "../../metric/entities/metric.entity";


export class Repository {
  id: bigint;
  tribe?: Tribe;
  tribeId: bigint;
  name: string;
  state: State;
  createdAt: Date;
  status: Status;
  metrics?: Metric | null;
}
