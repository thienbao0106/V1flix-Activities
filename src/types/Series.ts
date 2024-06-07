import { Episode } from "./Episodes";
import { Genre } from "./Genres";
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
  genres: Genre[];
  total_episodes: number;
  season: string;
  favors: number;
  type: string;
  episodes: Episode[];
}
