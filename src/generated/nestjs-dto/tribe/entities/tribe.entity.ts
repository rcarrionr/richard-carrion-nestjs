import { Organization } from "../../organization/entities/organization.entity";
import { Repository } from "../../repository/entities/repository.entity";


export class Tribe {
  id: bigint;
  organization?: Organization;
  organizationId: bigint;
  name: string;
  status: boolean;
  repository?: Repository[];
}
