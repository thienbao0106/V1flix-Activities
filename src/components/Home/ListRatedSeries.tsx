import { Series } from "../../types/Series";
import { useQuery } from "@apollo/client";
import RatedCard from "./RatedCard";
import { GET_SERIES } from "../../queries/series";

interface MostRatedFetch {
  series: {
    series: Series[];
  };
}

const ListRatedSeries = () => {
  const { loading, error, data } = useQuery<MostRatedFetch>(GET_SERIES);
  if (loading) return <p>Loading...</p>;
  if (error || !data) return <p>Error : {error?.message}</p>;

  const listSeries = [...data.series.series].sort(
    (firstSeries: Series, secondSeries: Series) =>
      secondSeries.avg_score - firstSeries.avg_score
  );
  return (
    <section className="grid lg:grid-cols-9 grid-cols-4 w-full lg:gap-x-3 gap-y-4">
      {listSeries.slice(0, 3).map((series: Series, index) => (
        <RatedCard
          series={series}
          colSpan={index === 0 ? 4 : index === 1 ? 3 : 2}
          ranking={index + 1}
          key={series._id}
        />
      ))}
    </section>
  );
};

export default ListRatedSeries;
