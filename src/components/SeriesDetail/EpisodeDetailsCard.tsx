import { Episode } from "../../types/Episodes";
import { getEpisodeThumbnail } from "../../utils/handleImages";

interface EpisodeDetailsCard {
  episode: Episode;
  title: string;
}

const EpisodeDetailsCard = ({ episode, title }: EpisodeDetailsCard) => {
  return (
    <div className="flex flex-row gap-x-2">
      <div className="w-2/6">
        <img
          src={getEpisodeThumbnail(title, episode.thumbnail)}
          alt={`ep-${episode._id}`}
          className="w-full hover:cursor-pointer hover:opacity-60 rounded-lg"
        />
      </div>
      <div className="w-4/6">
        <h1>
          Ep {episode.epNum}: {episode.title}
        </h1>
      </div>
    </div>
  );
};

export default EpisodeDetailsCard;
