import { useQuery } from "@apollo/client";
import { Episode } from "../../types/Episodes";
import { GET_JUST_RELEASED } from "../../queries/episode";
import SeriesCard from "../Common/SeriesCard/SeriesCard";
import { getImage } from "../../utils/handleImages";
import { ImagesSize } from "../../enums/images";
import moment from "moment";
interface NewEpisodesFetch {
  episodes: {
    episodes: Episode[];
  };
}

const ListNewEpisodes = () => {
  const { loading, error, data } =
    useQuery<NewEpisodesFetch>(GET_JUST_RELEASED);

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error : {error?.message}</p>;
  return (
    <section className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-3 gap-4 w-full">
      {data.episodes.episodes.slice(0, 12).map((episode: Episode) => (
        <SeriesCard
          key={episode.series._id}
          dataNum={episode.epNum.toString()}
          id={episode.series._id}
          image={getImage(ImagesSize.COVER, episode.series.images)}
          title={episode.series.title.main_title}
          releaseDate={moment(episode.created_at).fromNow()}
          dataKind={"episode"}
        />
      ))}
    </section>
  );
};

export default ListNewEpisodes;
