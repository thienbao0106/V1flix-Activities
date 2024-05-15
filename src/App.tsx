import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
