import { Item } from "./item";
import { Body } from "./body";
export interface SelectedItems {
  Body?: Body;
  Head?: Body;
  Hair?: Item;
  Face?: Item;
  "Face Accessory"?: Item;
  "Eye Decoration"?: Item;
  Earrings?: Item;
  Cape?: Item;
  Hat?: Item;
  Overall?: Item;
  Glove?: Item;
  Shield?: Item;
  Shoes?: Item;
}
