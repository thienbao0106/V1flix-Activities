import { FaClock, FaEye, FaHeart, FaStar, FaTv } from "react-icons/fa";
import { Series } from "../../types/Series";
import { getImage } from "../../utils/handleImages";

interface SmallScreenHeader {
  series: Series;
}

const SmallScreenHeader = ({ series }: SmallScreenHeader) => {
  const thumbnail = getImage("thumbnail", series.images);
  return (
    <section className="w-full flex flex-row gap-x-2">
      <img className="rounded-lg" src={thumbnail} alt={`thumb-${series._id}`} />
      <section className="w-full flex flex-col justify-between items-start">
        <header>
          <div>
            <h1 className="font-bold text-2xl line-clamp-2">
              {series.title.main_title}
            </h1>
            <h2 className="font-normal text-md line-clamp-1">
              {series.title.alt_title}
            </h2>
          </div>
          <div className="gap-x-5 flex flex-row justify-start items-start text-xl">
            <div className="flex flex-row justify-center items-center gap-x-2">
              {series.view}
              <div className="text-green-400">
                <FaEye />
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-2">
              {series.avg_score}
              <div className="text-yellow-400">
                <FaStar />
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-2">
              {series.favors}
              <div className="text-red-400">
                <FaHeart />
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-row justify-start items-center gap-x-3">
          <div className="flex flex-row items-center gap-x-2">
            <div className="text-secondColor font-bold">
              <FaTv />
            </div>
            {series.type}
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <div className="text-secondColor font-bold">
              <FaClock />
            </div>
            {series.duration} minutes
          </div>
        </div>
      </section>
    </section>
  );
};

export default SmallScreenHeader;
