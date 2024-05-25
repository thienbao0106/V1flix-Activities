import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
//GraphQL
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// Import the SDK
import { DiscordSDK } from "@discord/embedded-app-sdk";
//Redux
import { Provider } from "react-redux";
import { store } from "./store.ts";

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
});

const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

// Instantiate the SDK
setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
});

async function setupDiscordSdk() {
  await discordSdk.ready();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App discordSdk={discordSdk} />
    </Provider>
  </ApolloProvider>
);
