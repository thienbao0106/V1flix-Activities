import { Images } from "../../types/Images";
import { getImage } from "../../utils/handleImages";
import { ImagesSize } from "../../enums/images";
import { FaPlus } from "react-icons/fa";

interface LeftSectionProps {
  images: Images[];
  title: string;
}

const LeftSection = ({ images, title }: LeftSectionProps) => {
  const coverImg = getImage(ImagesSize.COVER, images);

  return (
    <div className="flex flex-col gap-y-2">
      <img
        className="w-full rounded-lg"
        src={coverImg}
        alt={`cover-${title}`}
      />
      <button className="bg-green-600 hover:bg-green-400 px-3 py-2 text-lg rounded-lg shadow-sm flex flex-row justify-center items-center gap-x-2">
        <FaPlus />
        Create Room
      </button>
    </div>
  );
};

export default LeftSection;
