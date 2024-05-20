import { useQuery } from "@apollo/client";
//Query
import { GET_SERIES } from "../queries/series";
//Components
import ListSeries from "../components/Home/ListSeries";
import BannerList from "../components/Home/BannerList";
//Types
import { Series } from "../types/Series";

interface SeriesFetch {
  series: {
    series: Series[];
  };
}

const Home = () => {
  const { loading, error, data } = useQuery<SeriesFetch>(GET_SERIES);

  if (loading) return <p>Loading...</p>;
  if (error || !data)
    return <p>Error : {error?.message ?? "Fetch data is error"}</p>;

  return (
    <main className="space-y-8">
      <section>
        <BannerList listSeries={data.series.series.slice(0, 5)} />
      </section>
      <section className="space-y-2">
        <h1 className="text-2xl font-bold uppercase">Newest Released</h1>
        <ListSeries
          listSeries={[...data.series.series].sort(
            (firstSeries: Series, secondSeries: Series) =>
              secondSeries.created_at - firstSeries.created_at
          )}
        />
      </section>
      <section className="space-y-2">
        <h1 className="text-2xl font-bold uppercase">Most Watched</h1>
        <ListSeries
          listSeries={[...data.series.series].sort(
            (firstSeries: Series, secondSeries: Series) =>
              secondSeries.view - firstSeries.view
          )}
        />
      </section>
    </main>
  );
};

export default Home;
