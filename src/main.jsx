import React from "react";
import "./styles/index.scss";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";
import Add from "./routes/add";
import DetailsContext from "./context/DetailsContext";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
  },
  {
    path: "/add-product",
    element: <Add />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <DetailsContext.Provider value={{}}>
        <RouterProvider router={router} />
      </DetailsContext.Provider>
  </React.StrictMode>
);
