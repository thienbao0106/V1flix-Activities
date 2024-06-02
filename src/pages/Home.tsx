//Components
import ListSeries from "../components/Home/ListSeries";
import BannerList from "../components/Home/BannerList";
//Types

import ListNewEpisodes from "../components/Home/ListNewEpisodes";
import { SeriesSortType } from "../enums/series";
import ListFavSeries from "../components/Home/ListFavSeries";
import ListRatedSeries from "../components/Home/ListRatedSeries";
import UserSection from "../components/Home/UserSection";

const Home = () => {
  return (
    <main className="space-y-8">
      <section>
        <BannerList />
      </section>
      <section className="space-y-2">
        <h1 className="text-2xl font-bold uppercase">Users Online</h1>
        <UserSection />
      </section>
      <section className="space-y-2">
        <h1 className="text-2xl font-bold uppercase">Newest Released</h1>
        <ListNewEpisodes />
      </section>
      <section className="space-y-2">
        <h1 className="text-2xl font-bold uppercase">Most Favorite</h1>
        <ListFavSeries />
      </section>
      <section className="space-y-2">
        <h1 className="text-2xl font-bold uppercase">Most Watched</h1>
        <ListSeries type={SeriesSortType.VIEW} />
      </section>
      <section className="space-y-2">
        <h1 className="text-2xl font-bold uppercase">Most Rated</h1>
        <ListRatedSeries />
      </section>
    </main>
  );
};

export default Home;
