import React from 'react'
import './styles/index.css'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, {loader as rootLoader} from './routes/root';
import ErrorPage from './error-page';
import Add from './routes/add';

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader
  },
  {
    path: "/add",
    element: <Add />,
    errorElement: <ErrorPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
