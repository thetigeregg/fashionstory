import { Region } from "./region";
import { TypeInfo } from "./typeinfo";

export interface Body {
  name: string;
  noIcon: boolean;
  id: number;
  region: Region;
  version: string;
  typeInfo: TypeInfo;
}
