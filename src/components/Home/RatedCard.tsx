import { FaStar } from "react-icons/fa";
import { ImagesSize } from "../../enums/images";
import { Series } from "../../types/Series";
import { getImage } from "../../utils/handleImages";
import { useWindowSize } from "../../hooks/useWindowSize";

interface RatedCardProps {
  series: Series;
  colSpan: number;
  ranking: number;
}

const RatedCard = ({ series, colSpan, ranking }: RatedCardProps) => {
  const banner = getImage(ImagesSize.BANNER, series.images);
  const size = useWindowSize();
  const actualColSpan =
    size.width < 1024 && ranking >= 2 ? colSpan + 3 : colSpan;
  return (
    <div
      className="group relative"
      style={{ gridColumn: `span ${actualColSpan} / span ${actualColSpan}` }}
    >
      <div
        className={`group-hover:cursor-pointer group-hover:opacity-20 lg:h-full bg-cover bg-center bg-no-repeat rounded-md w-full`}
        style={{
          height: "200px",

          backgroundImage: `url(${banner})`,
        }}
      ></div>
      <div className="absolute invisible group-hover:visible bottom-0 px-2 pb-2">
        <h1 className="text-lg font-bold  line-clamp-1">
          {series.title.main_title}
        </h1>
        <p className="font-normal text-md">
          {series.season} -{" "}
          <span className="font-bold text-secondColor">
            {series.avg_score}⭐
          </span>
        </p>
      </div>

      <div className="absolute -top-6 -right-4 z-50">
        <div className="relative">
          <FaStar color="yellow" size={50} />
          <span className="font-extrabold text-lg absolute inset-x-[1.2rem] inset-y-[0.8rem] text-black ">
            {ranking}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RatedCard;
