import { Region } from "./region";
import { RequiredJob } from "./required-job";
import { TypeInfo } from "./typeinfo";

export interface Item {
  requiredJobs: string[];
  requiredLevel?: number;
  isCash: boolean;
  requiredGender: number;
  name: string;
  desc: string;
  id: number;
  typeInfo: TypeInfo;
  region: string;
  version: string;
}
