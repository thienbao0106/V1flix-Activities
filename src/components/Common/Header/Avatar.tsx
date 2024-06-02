import { User } from "../../../types/User";

interface AvatarProps {
  user: User;
  divRef: React.RefObject<HTMLDivElement>;
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
  hover: boolean;
}

const Avatar = ({ user, divRef, setHover, hover }: AvatarProps) => {
  return (
    <>
      <div className="relative" ref={divRef}>
        <img
          className="hover:cursor-pointer rounded-lg"
          onClick={() => setHover(!hover)}
          src={`${import.meta.env.VITE_DISCORD_ACTIVITY_URL}/avatar/${
            user.id
          }/${user.avatar}.webp?size=60`}
          alt={`avatar-${user.username}`}
        />
        {hover === true && (
          <div className="absolute z-[999] right-0  top-[4.3rem] rounded-md text-right  bg-detail w-[15rem] p-2">
            <h1 className="text-lg">{user.username}</h1>
            <h2 className="text-md italic font-normal line-clamp-2">
              Nickname: {user.nickname}
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Avatar;
