import { Hsl } from "./hsl";
import { RGB } from "./rgb";

export interface BackgroundColor {
  hsl: Hsl;
  hex: string;
  rgb: RGB;
  hsv: Hsl;
  oldHue: number;
  source: string;
}
