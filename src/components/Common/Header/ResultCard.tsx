import { FaCalendar, FaEye, FaStar } from "react-icons/fa";
import { Series } from "../../../types/Series";
import { getImage } from "../../../utils/handleImages";
import { Link } from "react-router-dom";

interface ResultCardProps {
  result: Series[];
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const ResultCard = ({ result, setKeyword }: ResultCardProps) => {
  return (
    <>
      {result &&
        result.slice(0, 3).map((series: Series) => (
          <Link
            onClick={() => setKeyword("")}
            key={series._id}
            to={`/series/${series.title.main_title}`}
          >
            <div className="bg-slate-600 hover:bg-slate-400 hover:cursor-pointer flex flex-row gap-x-2 p-2">
              <img
                src={getImage("thumbnail", series.images)}
                alt={`thumb-${series._id}`}
                className="w-[70px] rounded-lg"
              />
              <div className="flex flex-col justify-between items-start">
                <div>
                  <h1 className="font-bold text-md line-clamp-2">
                    {series.title.main_title}
                  </h1>
                  <section className="flex flex-row text-sm font-normal gap-x-5">
                    <div className="flex flex-row gap-x-1 justify-center items-center">
                      <FaCalendar size={10} />
                      <div className="pt-0.5">{series.season}</div>
                    </div>
                    <div className="flex flex-row gap-x-1 justify-center items-center">
                      <FaEye size={13} />
                      <div className="pt-0.5">{series.view}</div>
                    </div>
                  </section>
                </div>
                <div className="flex flex-row justify-center items-center gap-x-2">
                  <FaStar color="yellow" />
                  <div>{series.avg_score}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      {result && result.length > 3 && (
        <div className="bg-secondColor text-center hover:bg-secondColorBrighter py-2  hover:cursor-pointer">
          See more
        </div>
      )}
    </>
  );
};

export default ResultCard;
