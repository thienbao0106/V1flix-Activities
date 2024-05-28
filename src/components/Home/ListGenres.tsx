import { Genre } from "../../types/Genres";

export interface ListGenresProps {
  genres: Genre[];
}

const ListGenres = ({ genres }: ListGenresProps) => {
  return (
    <section className="flex lg:flex-row flex-wrap w-full gap-x-2 lg:gap-y-0 gap-y-2">
      {genres.map((genre: Genre) => (
        <div
          key={genre._id}
          className="px-2 py-1 font-bold bg-secondColor rounded-lg"
        >
          {genre.name}
        </div>
      ))}
    </section>
  );
};

export default ListGenres;
