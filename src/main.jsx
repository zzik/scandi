import React from "react";
import "./styles/index.scss";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";
import { List } from "./components/home";
import { AddItem } from "./components/add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <List />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
      },
      {
        path: "/add-product",
        errorElement: <ErrorPage />,
        element: <AddItem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
