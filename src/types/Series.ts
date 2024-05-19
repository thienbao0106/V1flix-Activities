import { Images } from "./Images";

export interface Title {
  main_title: string;
  alt_title: string;
}

export interface Series {
  _id: string;
  images: Images[];
  title: Title;
  updated_at: number;
  created_at: number;
  view: number;
  avg_score: number;
  description: string;
}
