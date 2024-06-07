import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
//GraphQL
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// Import the SDK
//Redux
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
);
