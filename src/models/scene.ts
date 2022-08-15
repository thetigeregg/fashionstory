import { BackgroundColor } from "./background-color";
import { Character } from "./character";

export interface Scene {
  characters: Character[];
  pets: any[];
  npcs: any[];
  mobs: any[];
  selectedIndex: number;
  selectedMap: null;
  zoom: number;
  backgroundColor: BackgroundColor;
  language: string;
  region: string;
  version: string;
}
