import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main";
import { Layout } from "./layouts";

export enum ROUTES_PATHS {
  ROOT = "/",
}

export const router = createBrowserRouter([
  {
    id: "root",
    path: ROUTES_PATHS.ROOT,
    Component: Layout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
    ],
  },
]);
