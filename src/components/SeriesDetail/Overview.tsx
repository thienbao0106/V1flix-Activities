import { Series } from "../../types/Series";

interface OverviewProps {
  series: Series;
}

const Overview = ({ series }: OverviewProps) => {
  return (
    <section>
      <p className="font-normal text-md mb-3">{series.description}</p>
      <div className="space-y-2">
        <div>
          <label className="font-normal">Type: </label>
          <span className=" text-secondColor">{series.type}</span>
        </div>
        <div>
          <label className="font-normal">Current Episodes: </label>
          <span className=" text-secondColor">{series.episodes.length}</span>
        </div>
        <div>
          <label className="font-normal">Total Episodes: </label>
          <span className=" text-secondColor">{series.total_episodes}</span>
        </div>
        <div>
          <label className="font-normal">Season: </label>
          <span className=" text-secondColor">{series.season}</span>
        </div>
      </div>
    </section>
  );
};

export default Overview;
