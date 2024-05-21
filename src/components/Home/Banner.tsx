import { Series } from "../../types/Series";
import { getImage } from "../../utils/handleImages";
import ListGenres from "./ListGenres";
import { IoIosStar } from "react-icons/io";
import { FaEye, FaPlus } from "react-icons/fa";
import { ImagesSize } from "../../enums/images";

export interface BannerProps {
  series: Series;
}

const Banner = ({ series }: BannerProps) => {
  const bannerImg = getImage(ImagesSize.BANNER, series.images);
  const coverImg = getImage(ImagesSize.COVER, series.images);
  return (
    <section
      className=" h-[380px]  bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `linear-gradient(rgba(65, 63, 63, 0.6), rgba(65, 40, 63, 0.6)), url(${bannerImg})`,
      }}
    >
      <div className="px-32 py-10 w-full flex flex-row gap-x-4">
        <img
          className="w-1/6 rounded shadow-sm"
          src={coverImg}
          alt={`cover-${series._id}`}
        />

        <section className="w-3/4 space-y-2 flex flex-col justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl">{series.title.main_title}</h1>
            <h2 className="text-lg font-normal">{series.title.alt_title}</h2>
            <section>
              <ListGenres genres={series.genres} />
            </section>
            <p className="line-clamp-3 font-normal">{series.description}</p>

            <section className="flex flex-row gap-x-2">
              <div className="bg-detail px-2 py-1 rounded-lg flex flex-row justify-center items-center gap-x-2">
                <IoIosStar color="#e89b26" />
                {series.avg_score === 0 ? "Not Rated" : series.avg_score}
              </div>
              <div className="bg-detail px-2 py-1 rounded-lg flex flex-row justify-center items-center gap-x-2">
                <FaEye color="#e89b26" />

                {series.view}
              </div>
            </section>
          </div>
          <div>
            <button className="bg-green-600 hover:bg-green-400 px-3 py-2 text-lg rounded-lg shadow-sm flex flex-row justify-center items-center gap-x-2">
              <FaPlus />
              Create Room
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Banner;
