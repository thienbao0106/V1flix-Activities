import { Series } from "../../types/Series";
import { getImage } from "../../utils/handleImages";

import { IoIosStar } from "react-icons/io";
import { FaEye, FaPlus } from "react-icons/fa";
import { ImagesSize } from "../../enums/images";
import { useWindowSize } from "../../hooks/useWindowSize";

export interface BannerProps {
  series: Series;
}

const Banner = ({ series }: BannerProps) => {
  const bannerImg = getImage(ImagesSize.BANNER, series.images);
  const coverImg = getImage(ImagesSize.COVER, series.images);
  const size = useWindowSize();
  return (
    <section
      className="    bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `linear-gradient(rgba(65, 63, 63, 0.6), rgba(65, 40, 63, 0.6)), url(${bannerImg})`,
      }}
    >
      <div className="lg:px-32 px-10 py-10 w-full flex flex-row gap-x-4">
        {size.width > 1024 && (
          <img
            className="xl:w-1/6 lg:w-1/4 rounded shadow-sm"
            src={coverImg}
            alt={`cover-${series._id}`}
          />
        )}

        <section className="xl:w-5/6 lg:w-3/4 w-full space-y-2 flex flex-col justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl line-clamp-2">{series.title.main_title}</h1>
            <h2 className="text-lg font-normal">{series.title.alt_title}</h2>
            {/* <section>
              <ListGenres genres={series.genres} />
            </section> */}
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
            <p className="line-clamp-3 font-normal">{series.description}</p>
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
