import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "./app/app.tsx";
import { configureAppStore } from "./app/configure-store.ts";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);
const store = configureAppStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
