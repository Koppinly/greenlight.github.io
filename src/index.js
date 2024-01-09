import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WrappedApp from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <WrappedApp />
  </StrictMode>,
);
