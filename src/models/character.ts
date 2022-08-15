import { Position } from "./position";
import { SelectedItems } from "./selected-items";

export interface Character {
  id: number;
  type: string;
  action: string;
  emotion: string;
  skin: number;
  zoom: number;
  frame: number;
  mercEars: boolean;
  illiumEars: boolean;
  selectedItems: SelectedItems;
  visible: boolean;
  position: Position;
  fhSnap: boolean;
  flipX: boolean;
  name: string;
  includeBackground: boolean;
}
