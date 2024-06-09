import moment from "moment";
import { Episode } from "../../types/Episodes";
import { getEpisodeThumbnail } from "../../utils/handleImages";
import { FaCalendar, FaEye } from "react-icons/fa";

interface EpisodeDetailsCard {
  episode: Episode;
  title: string;
}

const EpisodeDetailsCard = ({ episode, title }: EpisodeDetailsCard) => {
  return (
    <div className="flex flex-row gap-x-3 ">
      <div className="w-2/6">
        <img
          src={getEpisodeThumbnail(title, episode.thumbnail)}
          alt={`ep-${episode._id}`}
          className="w-full hover:cursor-pointer hover:opacity-60 rounded-lg max-h-[180px]"
        />
      </div>
      <div className="w-4/6 space-y-1">
        <h1 className="text-xl line-clamp-2">
          Ep {episode.epNum}: {episode.title}
        </h1>
        <div className="flex flex-row justify-start gap-x-4 items-center">
          <h3 className="font-light text-md flex flex-row justify-start gap-x-1 items-center">
            <FaCalendar fontWeight={300} />
            {moment(episode.created_at).calendar()}
          </h3>
          <h3 className="font-light text-md flex flex-row justify-start gap-x-1 items-center">
            <FaEye fontWeight={300} />
            {episode.view}
          </h3>
        </div>
        <p className="line-clamp-2 text-sm font-light">{episode.description}</p>
      </div>
    </div>
  );
};

export default EpisodeDetailsCard;
