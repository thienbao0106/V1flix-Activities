/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { useAppDispatch } from "./hook";
import { setListUsers } from "./slices/userSlice";
import { DiscordSDK } from "@discord/embedded-app-sdk";
import { setupDiscordSdk } from "./utils/setupDiscordSDK";
import { User } from "./types/User";
import { useEffect } from "react";
//Pages
import Home from "./pages/Home";
import SeriesDetail from "./pages/SeriesDetail";

const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);
function App() {
  const dispatch = useAppDispatch();

  const handleParticipantUpdate = (users: any) => {
    const currentListUsers: User[] | any = users.participants.map(
      (user: any) => {
        return {
          id: user.id,
          username: user.username,
          avatar: user.avatar,
          nickname: user.global_name,
        };
      }
    );
    dispatch(setListUsers(currentListUsers));
  };
  useEffect(() => {
    // Instantiate the SDK
    setupDiscordSdk(discordSdk).then(() => {
      discordSdk.subscribe(
        "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE",
        handleParticipantUpdate
      );
    });
    return () => {
      discordSdk.unsubscribe(
        "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE",
        handleParticipantUpdate
      );
    };
  }, []);

  return (
    <section className="font-bold text-white">
      <BaseLayout>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<SeriesDetail />} path="/series/:title" />
        </Routes>
      </BaseLayout>
    </section>
  );
}

export default App;
