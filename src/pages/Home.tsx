import { useQuery } from "@apollo/client";
//Query
import { GET_SERIES } from "../queries/series";
import ListSeries from "../components/Home/ListSeries";

const Home = () => {
  const { loading, error, data } = useQuery(GET_SERIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <main>
      <section className="space-y-2">
        <h1 className="text-3xl font-bold uppercase">List series</h1>
        <ListSeries listSeries={data.series.series} />
      </section>
    </main>
  );
};

export default Home;
