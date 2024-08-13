import React from "react";
import "./styles/index.scss";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Root, { loader as rootLoader } from "./routes/root";
// import ErrorPage from "./error-page";
import { List } from "./components/home";
import { AddItem } from "./components/add";
import App from "./App";
import { PayloadProvider } from "./context/PayloadContext";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PayloadProvider>

      <App />
    </PayloadProvider>
  </React.StrictMode>
);
