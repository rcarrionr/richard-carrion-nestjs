import { Organization } from "../../organization/entities/organization.entity";


export class Tribe {
  id: bigint;
  organization?: Organization;
  organizationId: bigint;
  name: string;
  status: boolean;
}
