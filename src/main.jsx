import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { LoggedInUserProvider } from "./contexts/LoggedInUser.jsx";
import { TopicsListProvider } from "./contexts/TopicsList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoggedInUserProvider>
      <TopicsListProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TopicsListProvider>
    </LoggedInUserProvider>
  </StrictMode>
);
