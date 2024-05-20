import { Series } from "../../types/Series";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Banner from "./Banner";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";

export interface BannerListProps {
  listSeries: Series[];
}

const BannerList = ({ listSeries }: BannerListProps) => {
  return (
    <section className="lg:-mx-32 -mx-10">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {listSeries.map((series: Series) => (
          <SwiperSlide>
            <Banner series={series} key={series._id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerList;
