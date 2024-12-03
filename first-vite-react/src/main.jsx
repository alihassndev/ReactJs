import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Ali from "./test.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Ali />
  </StrictMode>
);

// dev-aown.netlify.app
