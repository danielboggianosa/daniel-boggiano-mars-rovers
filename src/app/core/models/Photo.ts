import { Camera } from "./Camera";
import { Rover } from "./Rover";

export interface Photo {
  camera: Camera;
  earth_date: string;
  id: number;
  img_src: string;
  rover: Rover;
  sol: number;
}
