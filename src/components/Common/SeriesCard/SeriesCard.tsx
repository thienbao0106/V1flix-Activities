import { SeriesSortType } from "../../../enums/series";
import { IoEyeSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
export interface SeriesCardProps {
  id: string;
  title: string;
  image: string;
  dataNum?: string;
  dataKind?: string; //Data num can be episode or view or score
  releaseDate?: string;
}

const SeriesCard = ({
  id,
  title,
  image,
  dataNum,
  releaseDate,
  dataKind,
}: SeriesCardProps) => {
  return (
    <div className="space-y-2 group" key={id}>
      <section className="relative">
        <Link to={dataKind === "episode" ? "/" : `/series/${title}`}>
          <img
            className=" group-hover:cursor-pointer group-hover:opacity-50 w-full"
            src={image}
            alt={`img-${id}`}
          />
        </Link>
        {dataNum && releaseDate && (
          <div className="absolute bg-detail bottom-0 w-full py-0.5 px-1 rounded-b-sm font-normal text-sm flex justify-between items-center">
            <div className="flex flex-row justify-items items-center gap-x-1.5">
              {dataKind === SeriesSortType.EPISODE && <span>Ep: </span>}
              {dataKind === SeriesSortType.VIEW && (
                <span>
                  <IoEyeSharp />
                </span>
              )}
              {dataKind === SeriesSortType.SCORE && (
                <span>
                  <CiStar />
                </span>
              )}
              <span className="line-clamp-1">{dataNum}</span>
            </div>
            <span className="line-clamp-1">{releaseDate}</span>
          </div>
        )}
      </section>
      <p className="truncate">{title}</p>
    </div>
  );
};

export default SeriesCard;
