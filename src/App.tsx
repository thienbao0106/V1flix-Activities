import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/Home";
import { useAppDispatch } from "./hook";
import { setUser } from "./slices/userSlice";
import { DiscordSDK } from "@discord/embedded-app-sdk";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

interface AppProps {
  discordSdk: DiscordSDK;
}

function App({ discordSdk }: AppProps) {
  const dispatch = useAppDispatch();
  const getUser = async () => {
    const user = await discordSdk.commands.getInstanceConnectedParticipants();

    dispatch(
      setUser({
        id: user.participants[0].id,
        avatar: "",
        username: "",
      })
    );
  };
  getUser();

  return (
    <section className="font-bold text-white">
      <BaseLayout>
        <RouterProvider router={router} />
      </BaseLayout>
    </section>
  );
}

export default App;
