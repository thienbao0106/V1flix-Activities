export interface SeriesCardProps {
  id: string;
  title: string;
  image: string;
}

const SeriesCard = ({ id, title, image }: SeriesCardProps) => {
  return (
    <div className="space-y-2" key={id}>
      <img className="rounded-lg" src={image} alt={`img-${id}`} />
      <p className="truncate">{title}</p>
    </div>
  );
};

export default SeriesCard;
