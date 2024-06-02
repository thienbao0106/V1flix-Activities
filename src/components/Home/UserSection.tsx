import { useAppSelector } from "../../hook";
import { User } from "../../types/User";
import UserCard from "./UserCard";

const UserSection = () => {
  const listUsers: User[] = useAppSelector((state) => state.user.value);

  return (
    <section>
      <section
        className={`pt-2 grid lg:grid-cols-${
          listUsers.length <= 2 ? 3 : listUsers.length
        } grid-cols-2 lg:gap-x-0 gap-x-8`}
      >
        {listUsers.map((user: User) => (
          <UserCard user={user} />
        ))}
      </section>
    </section>
  );
};

export default UserSection;
