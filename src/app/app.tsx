import { RouterProvider } from "react-router-dom";
import { useProviders } from "./providers";
import { router } from "./routes";

export const App = () => {
  useProviders();

  return <RouterProvider router={router} />;
};
