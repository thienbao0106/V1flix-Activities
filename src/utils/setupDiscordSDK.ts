import { DiscordSDK } from "@discord/embedded-app-sdk";

let auth;
export async function setupDiscordSdk(discordSdk: DiscordSDK) {
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
}
