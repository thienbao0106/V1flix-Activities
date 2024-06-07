import { User } from "../../types/User";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="w-full flex flex-row lg:gap-x-6 gap-x-0 lg:justify-start justify-between items-center border border-white rounded-lg p-2">
      <img
        src={`${import.meta.env.VITE_DISCORD_ACTIVITY_URL}/avatar/${user.id}/${
          user.avatar
        }.webp?size=60`}
        className=" rounded-lg"
        alt={`avatar-${user.id}`}
      />
      <div className="lg:text-left text-right">
        <h2 className="font-bold text-xl">{user.username}</h2>
        <h3 className="font-normal text-sm italic">{user.nickname}</h3>
      </div>
    </div>
  );
};

export default UserCard;
