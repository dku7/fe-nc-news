import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { LoggedInUserProvider } from "./contexts/LoggedInUser.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoggedInUserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoggedInUserProvider>
  </StrictMode>
);
