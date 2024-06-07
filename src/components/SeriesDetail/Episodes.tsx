import { Episode } from "../../types/Episodes";
import EpisodeDetailsCard from "./EpisodeDetailsCard";

interface EpisodesProps {
  episodes: Episode[];
  title: string;
}

const Episodes = ({ episodes, title }: EpisodesProps) => {
  return (
    <section className="space-y-3">
      {episodes.map((episode: Episode) => (
        <EpisodeDetailsCard episode={episode} key={episode._id} title={title} />
      ))}
    </section>
  );
};

export default Episodes;
