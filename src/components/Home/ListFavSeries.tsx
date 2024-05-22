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
    <section className="w-full grid grid-cols-5 gap-x-4 h-[17rem]">
      <FavSeriesCard ranking={1} textSize="xl" height="17" series={firstData} />
      <div className="col-span-2 flex flex-col  gap-y-4">
        {listSeries.slice(1, 3).map((series: Series, index) => (
          <div className="space-y-2 ">
            <FavSeriesCard
              ranking={index + 2}
              textSize="lg"
              height="8"
              series={series}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListFavSeries;
