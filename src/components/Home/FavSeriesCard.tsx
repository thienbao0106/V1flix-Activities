import { ImagesSize } from "../../enums/images";
import { Series } from "../../types/Series";
import { getImage } from "../../utils/handleImages";
import { FaHeart } from "react-icons/fa";

interface FavSeriesCardProps {
  height: string;
  series: Series;
  textSize: string;
  ranking: number;
}

const FavSeriesCard = ({
  height,
  series,
  textSize,
  ranking,
}: FavSeriesCardProps) => {
  const banner = getImage(ImagesSize.BANNER, series.images);

  return (
    <div className="space-y-2 col-span-3 group relative">
      <div
        className={`group-hover:cursor-pointer group-hover:opacity-20 h-[${height}rem]  bg-cover bg-center bg-no-repeat rounded-md `}
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>
      <div className="absolute invisible group-hover:visible bottom-0 px-2 pb-2">
        <h1 className={`text-${textSize} font-bold line-clamp-1"`}>
          {series.title.main_title}
        </h1>
        <p className="font-normal text-md">
          {series.season} -{" "}
          <span className="font-bold text-secondColor">{series.favors}❤️</span>
        </p>
      </div>
      {/* <h1 className="text-xl line-clamp-1">{firstData.title.main_title}</h1> */}
      <div className="absolute -top-6 -right-4 z-50">
        <div className="relative">
          <FaHeart color="red" size={50} />
          <span className="font-extrabold text-lg absolute inset-x-[1.2rem] inset-y-[0.8rem]">
            {ranking}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FavSeriesCard;
