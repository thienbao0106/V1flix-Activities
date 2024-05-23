import SeriesCard from "../Common/SeriesCard/SeriesCard";
//Utils
import { getImage } from "../../utils/handleImages";
//Types
import { Series } from "../../types/Series";
import { useQuery } from "@apollo/client";
import { GET_SERIES } from "../../queries/series";
import { ImagesSize } from "../../enums/images";

interface SeriesFetch {
  series: {
    series: Series[];
  };
}

interface ListSeriesProps {
  type: string;
}

const ListSeries = ({ type }: ListSeriesProps) => {
  const { loading, error, data } = useQuery<SeriesFetch>(GET_SERIES);

  if (loading) return <p>Loading...</p>;
  if (error || !data)
    return <p>Error : {error?.message ?? "Fetch data is error"}</p>;
  const listSeries = [...data.series.series].sort(
    (firstSeries: Series | any, secondSeries: Series | any) =>
      secondSeries[type] - firstSeries[type]
  );
  return (
    <section className="grid xl:grid-cols-6 lg:grid-cols-4 grid-cols-3 gap-4 w-full">
      {listSeries.map((series: Series) => (
        <SeriesCard
          id={series._id}
          key={series._id}
          title={series.title.main_title}
          image={getImage(ImagesSize.COVER, series.images)}
          releaseDate={series.season.split(" ")[1]}
          dataNum={series.view.toString()}
          dataKind={type}
        />
      ))}
    </section>
  );
};

export default ListSeries;
