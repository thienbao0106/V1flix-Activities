//Components
import ListSeries from "../components/Home/ListSeries";
import BannerList from "../components/Home/BannerList";
//Types

import ListNewEpisodes from "../components/Home/ListNewEpisodes";
import { SeriesSortType } from "../enums/series";
import ListFavSeries from "../components/Home/ListFavSeries";

const Home = () => {
  return (
    <main className="space-y-8">
      <section>
        <BannerList />
      </section>
      <section className="space-y-2">
        <h1 className="text-2xl font-bold uppercase">Newest Released</h1>
        <ListNewEpisodes />
      </section>
      <section className="space-y-2">
        <h1 className="text-2xl font-bold uppercase">Most Fav</h1>
        <ListFavSeries />
      </section>
      <section className="space-y-2">
        <h1 className="text-2xl font-bold uppercase">Most Watched</h1>
        <ListSeries type={SeriesSortType.VIEW} />
      </section>
    </main>
  );
};

export default Home;
