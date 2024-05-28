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

const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);
function App() {
  const dispatch = useAppDispatch();
  let auth;
  // Instantiate the SDK
  setupDiscordSdk().then(() => {
    console.log("Discord SDK is ready");
  });

  async function setupDiscordSdk() {
    await discordSdk.ready();
    // Authorize with Discord Client
    const { code } = await discordSdk.commands.authorize({
      client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
      response_type: "code",
      state: "",
      prompt: "none",
      scope: ["identify", "guilds"],
    });

    // Retrieve an access_token from your activity's server
    const response = await fetch(
      `${import.meta.env.VITE_DISCORD_ACTIVITY_URL}/server/api/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
        }),
      }
    );
    const { access_token } = await response.json();
    console.log("test access token: " + access_token);
    // Authenticate with Discord client (using the access_token)
    auth = await discordSdk.commands.authenticate({
      access_token,
    });

    if (auth == null) {
      throw new Error("Authenticate command failed");
    }
    const users = await discordSdk.commands.getInstanceConnectedParticipants();
    const currentUser = users.participants[0];
    dispatch(
      setUser({
        avatar: currentUser.avatar || "",
        id: currentUser.id,
        username: currentUser.username || "",
        nickname: currentUser.global_name || "",
      })
    );
  }

  return (
    <section className="font-bold text-white">
      <BaseLayout>
        <RouterProvider router={router} />
      </BaseLayout>
    </section>
  );
}

export default App;
