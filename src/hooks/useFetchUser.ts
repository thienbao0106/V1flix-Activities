import { useEffect, useState } from "react";
import { User } from "../types/User";

export const useFetchUser = (id: string) => {
  const [user, setUser] = useState<User>({
    avatar: "",
    username: "",
    id: "",
  });
  useEffect(() => {
    const abortController = new AbortController();
    const fetchUser = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_DISCORD_ACTIVITY_URL}/users/196053339224539137`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_DISCORD_TOKEN}`,
          },
          signal: abortController.signal,
        }
      );

      const data = JSON.parse(await response.json());
      setUser({
        id: id,
        avatar: data.avatar,
        username: data.username,
      });
    };
    fetchUser();
    return () => {
      abortController.abort();
    };
  }, []);
  return user;
};
