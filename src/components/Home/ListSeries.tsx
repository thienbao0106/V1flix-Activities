import React from "react";
import SeriesCard from "../Common/SeriesCard/SeriesCard";
import { getImage } from "../../utils/handleImages";

export interface ListSeriesProps {
  listSeries: any[];
}

const ListSeries = ({ listSeries }: ListSeriesProps) => {
  return (
    <section className="grid grid-cols-6 gap-4 w-full">
      {listSeries.map((series: any) => (
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
