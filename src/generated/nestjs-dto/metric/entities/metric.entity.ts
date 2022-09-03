import { Repository } from "../../repository/entities/repository.entity";


export class Metric {
  id: bigint;
  repository?: Repository;
  repositoryId: bigint;
  coverange: number;
  bugs: number;
  vulnerabilities: number;
  hotspots: number;
  codeSmells: number;
}
