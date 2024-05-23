import { useQuery } from "@apollo/client";
import { Series } from "../../types/Series";
import { GET_SERIES } from "../../queries/series";
import FavSeriesCard from "./FavSeriesCard";

interface FavFetch {
  series: {
    series: Series[];
  };
}

const ListFavSeries = () => {
  const { loading, error, data } = useQuery<FavFetch>(GET_SERIES);

  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error : {error?.message}</p>;

  const listSeries = [...data.series.series].sort(
    (firstSeries: Series, secondSeries: Series) =>
      secondSeries.favors - firstSeries.favors
  );
  const firstData = listSeries[0];

  return (
    <section className="w-full lg:grid flex lg:grid-cols-5 flex-col lg:gap-x-4 gap-y-4 h-auto">
      <section className="lg:col-span-3 ">
        <FavSeriesCard
          ranking={1}
          textSize="xl"
          height={17}
          series={firstData}
        />
      </section>
      <div className="lg:col-span-2  grid  lg:grid-cols-none grid-cols-2 lg:grid-rows-2 grid-rows-none  lg:gap-y-4 gap-x-4 ">
        {listSeries.slice(1, 3).map((series: Series, index) => (
          <div className="space-y-2 ">
            <FavSeriesCard
              ranking={index + 2}
              textSize="lg"
              height={17}
              series={series}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListFavSeries;
