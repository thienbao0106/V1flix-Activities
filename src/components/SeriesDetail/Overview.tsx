import { Series } from "../../types/Series";

interface OverviewProps {
  series: Series;
}

const Overview = ({ series }: OverviewProps) => {
  return (
    <div>
      <p>{series.description}</p>
    </div>
  );
};

export default Overview;
