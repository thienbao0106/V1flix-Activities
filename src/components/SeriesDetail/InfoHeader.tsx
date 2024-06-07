import { FaEye, FaStar } from "react-icons/fa";
import { Title } from "../../types/Series";
import ListGenres from "../Home/ListGenres";
import { Genre } from "../../types/Genres";

interface InfoHeaderProps {
  title: Title;
  view: number;
  score: number;
  genres: Genre[];
}

const InfoHeader = ({ title, view, score, genres }: InfoHeaderProps) => {
  return (
    <section className="space-y-2">
      <div className="space-y-1">
        <h1
          className="text-3xl font-extrabold
        "
        >
          {title.main_title}
        </h1>
        <h2 className="font-normal">{title.alt_title}</h2>
      </div>
      <div className="gap-x-5 flex flex-row justify-start items-center text-3xl">
        <div className="flex flex-row justify-center items-center gap-x-2">
          {view}
          <div className="text-green-800">
            <FaEye />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-2">
          {score}
          <div className="text-yellow-800">
            <FaStar />
          </div>
        </div>
      </div>
      <div>
        <ListGenres genres={genres} />
      </div>
    </section>
  );
};

export default InfoHeader;
