import { useParams } from "react-router-dom";
import { GET_SERIES_BY_TITLE } from "../queries/series";
import { useQuery } from "@apollo/client";
import { Series } from "../types/Series";
import { useState } from "react";
import LeftSection from "../components/SeriesDetail/LeftSection";
import Banner from "../components/SeriesDetail/Banner";
import InfoHeader from "../components/SeriesDetail/InfoHeader";
import Overview from "../components/SeriesDetail/Overview";
import Episodes from "../components/SeriesDetail/Episodes";
import { useWindowSize } from "../hooks/useWindowSize";
import SmallScreenHeader from "../components/SeriesDetail/SmallScreenHeader";
import ListGenres from "../components/Home/ListGenres";
import { FaPlus } from "react-icons/fa";

interface FindSeriesFetch {
  findSeriesByName: Series;
}

const SeriesDetail = () => {
  const { title } = useParams();
  const { width } = useWindowSize();
  const [currentSection, setCurrentSection] = useState<string>("overview");
  const { loading, error, data } = useQuery<FindSeriesFetch>(
    GET_SERIES_BY_TITLE,
    {
      variables: { seriesTitle: title },
    }
  );

  if (loading) return "Loading...";
  if (error || !data) return `Error! ${error}`;

  return (
    <section className="lg:-mx-32 -mx-10 ">
      <Banner images={data?.findSeriesByName.images} />
      {width > 1024 ? (
        <section className="lg:mx-32 mx-10 flex flex-row gap-x-4 lg:-mt-44">
          <section className="w-1/6">
            <LeftSection
              images={data?.findSeriesByName.images}
              title={title || ""}
            />
          </section>
          <section className="w-5/6">
            <InfoHeader
              title={data.findSeriesByName.title}
              view={data.findSeriesByName.view}
              score={data.findSeriesByName.avg_score}
              genres={data.findSeriesByName.genres}
              favors={data.findSeriesByName.favors}
            />
            <section className="mt-10">
              <div className="flex flex-row gap-x-3 text-center text-xl  ">
                <div
                  onClick={() => setCurrentSection("overview")}
                  className={`hover:cursor-pointer px-6   ${
                    currentSection === "overview" &&
                    "border-b-secondColor border-b-4 border border-t-0 border-r-0 border-l-0"
                  }`}
                >
                  <h1>Overview</h1>
                </div>
                <div
                  onClick={() => setCurrentSection("episodes")}
                  className={`hover:cursor-pointer px-6   ${
                    currentSection === "episodes" &&
                    "border-b-secondColor border-b-4 border border-t-0 border-r-0 border-l-0 "
                  }`}
                >
                  <h1>Episodes</h1>
                </div>
              </div>
            </section>
            <section className="mt-5">
              {currentSection === "overview" && (
                <Overview series={data.findSeriesByName} />
              )}
              {currentSection === "episodes" && (
                <Episodes
                  title={data.findSeriesByName.title.main_title}
                  episodes={data.findSeriesByName.episodes}
                />
              )}
            </section>
          </section>
        </section>
      ) : (
        <section className="mx-10 flex flex-col gap-x-4 -mt-40 text-white">
          <SmallScreenHeader series={data.findSeriesByName} />
          <div className="mt-10">
            <ListGenres genres={data.findSeriesByName.genres} />
          </div>
          <section className="mt-5">
            <button className="bg-green-600 hover:bg-green-400 px-3 py-2 w-full text-lg rounded-lg shadow-sm flex flex-row justify-center items-center gap-x-2">
              <FaPlus />
              Create Room
            </button>
          </section>
          <section className="mt-5">
            <div className="flex flex-row gap-x-3 text-center text-xl  ">
              <div
                onClick={() => setCurrentSection("overview")}
                className={`hover:cursor-pointer px-6   ${
                  currentSection === "overview" &&
                  "border-b-secondColor border-b-4 border border-t-0 border-r-0 border-l-0"
                }`}
              >
                <h1>Overview</h1>
              </div>
              <div
                onClick={() => setCurrentSection("episodes")}
                className={`hover:cursor-pointer px-6   ${
                  currentSection === "episodes" &&
                  "border-b-secondColor border-b-4 border border-t-0 border-r-0 border-l-0 "
                }`}
              >
                <h1>Episodes</h1>
              </div>
            </div>
          </section>
          <section className="mt-4">
            {currentSection === "overview" && (
              <Overview series={data.findSeriesByName} />
            )}
            {currentSection === "episodes" && (
              <Episodes
                title={data.findSeriesByName.title.main_title}
                episodes={data.findSeriesByName.episodes}
              />
            )}
          </section>
        </section>
      )}
    </section>
  );
};

export default SeriesDetail;
