import { Series } from "../../types/Series";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Banner from "./Banner";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
import { useQuery } from "@apollo/client";
import { GET_SERIES } from "../../queries/series";

interface BannerFetch {
  series: {
    series: Series[];
  };
}

const BannerList = () => {
  const { loading, error, data } = useQuery<BannerFetch>(GET_SERIES);

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error : {error?.message}</p>;

  const listSeries = [...data.series.series].slice(0, 5);
  return (
    <section className="lg:-mx-32 -mx-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay={true}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {listSeries.map((series: Series) => (
          <SwiperSlide key={series._id}>
            <Banner series={series} key={series._id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerList;
