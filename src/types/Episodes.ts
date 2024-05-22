import { Series } from "./Series";

export interface Episode {
  _id: string;
  series: Series;
  epNum: number;
  created_at: number;
}