import { Series } from "../../types/Series";
import { getImage } from "../../utils/handleImages";

export interface BannerProps {
  series: Series;
}

const Banner = ({ series }: BannerProps) => {
  const bannerImg = getImage("banner", series.images);
  const coverImg = getImage("cover", series.images);
  return (
    <section
      className=" h-[380px]  bg-cover bg-center bg-no-repeat lg:-mx-32 -mx-10"
      style={{
        backgroundImage: `linear-gradient(rgba(65, 63, 63, 0.6), rgba(85, 65, 63, 0.6)), url(${bannerImg})`,
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
            <p className="line-clamp-3 font-normal">{series.description}</p>
          </div>
          <div>
            <button className="bg-secondColor px-3 py-2 text-lg rounded-lg shadow-sm">
              Create Room
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Banner;
