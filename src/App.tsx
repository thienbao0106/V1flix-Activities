import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <section className="font-bold text-white">
      <BaseLayout>
        <RouterProvider router={router} />
      </BaseLayout>
    </section>
  );
}

export default App;
