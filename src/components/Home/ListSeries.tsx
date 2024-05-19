import SeriesCard from "../Common/SeriesCard/SeriesCard";
//Utils
import { getImage } from "../../utils/handleImages";
//Types
import { Series } from "../../types/Series";

export interface ListSeriesProps {
  listSeries: Series[];
}

const ListSeries = ({ listSeries }: ListSeriesProps) => {
  return (
    <section className="grid lg:grid-cols-6 grid-cols-4 gap-4 w-full">
      {listSeries.map((series: Series) => (
        <SeriesCard
          id={series._id}
          key={series._id}
          title={series.title.main_title}
          image={getImage("cover", series.images)}
        />
      ))}
    </section>
  );
};

export default ListSeries;
