import { Series } from "./Series";

export interface Source {
  _id: string;
  kind: string;
  value: string;
}

export interface Subtitle {
  lang: string;
  source: Source[];
  value: string;
  label: string;
}

export interface Episode {
  _id: string;
  series: Series;
  epNum: number;
  created_at: number;
  thumbnail: string;
  title: string;
  view: number;
  description: string;
  source: Source[];
  subtitles: Subtitle[];
}
