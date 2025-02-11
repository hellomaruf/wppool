import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/Home";
import MainLayout from "../Layout/MainLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
