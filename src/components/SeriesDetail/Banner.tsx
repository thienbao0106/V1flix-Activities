import { ImagesSize } from "../../enums/images";
import { Images } from "../../types/Images";
import { getImage } from "../../utils/handleImages";

interface BannerProps {
  images: Images[];
}

const Banner = ({ images }: BannerProps) => {
  const bannerImg = getImage(ImagesSize.BANNER, images);
  return (
    <div
      className="bg-cover bg-center bg-no-repeat lg:h-[300px] h-[200px]"
      style={{
        backgroundImage: `linear-gradient(rgba(65, 63, 63, 0.6), rgba(65, 40, 63, 0.6)), url(${bannerImg})`,
      }}
    ></div>
  );
};

export default Banner;
