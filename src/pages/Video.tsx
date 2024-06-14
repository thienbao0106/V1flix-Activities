import { useParams } from "react-router-dom";
import { FIND_EPISODE } from "../queries/episode";
import { useQuery } from "@apollo/client";
import { Episode, Subtitle } from "../types/Episodes";
import { getSourceFilm } from "../utils/handleSource";
import { LegacyRef, useRef } from "react";

export interface FindEpisodeFetch {
  findEpisode: Episode;
}
const Video = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<FindEpisodeFetch>(FIND_EPISODE, {
    variables: { episodeId: id },
  });
  const videoRef: LegacyRef<HTMLVideoElement> = useRef<HTMLVideoElement>(null);

  if (loading) return "Loading...";
  if (error || !data) return `Error!`;

  const handleClick = (e: React.MouseEvent) => {
    const currentVideo = videoRef.current;
    currentVideo?.paused ? currentVideo?.play() : currentVideo?.pause();
    e.preventDefault();
  };

  return (
    <section className="relative">
      <video
        className="inset-0 fixed w-full h-full"
        controls
        ref={videoRef}
        onClick={(e) => handleClick(e)}
        disablePictureInPicture
        controlsList="nodownload foobar"
      >
        <source
          type="video/mp4"
          src={getSourceFilm(data.findEpisode.source[0].value)}
        />
        {data.findEpisode.subtitles.map((sub: Subtitle) => (
          <track
            src={getSourceFilm(sub.source[0].value)}
            kind="subtitles"
            label={sub.label}
          />
        ))}
      </video>
    </section>
  );
};

export default Video;
