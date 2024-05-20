import { Genre } from "../../types/Genres";

export interface ListGenresProps {
  genres: Genre[];
}

const ListGenres = ({ genres }: ListGenresProps) => {
  return (
    <section className="flex flex-row w-full gap-x-2">
      {genres.map((genre: Genre) => (
        <div className="px-2 py-1 font-bold bg-secondColor rounded-lg">
          {genre.name}
        </div>
      ))}
    </section>
  );
};

export default ListGenres;
