import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { LoggedInUserProvider } from "./contexts/LoggedInUser.jsx";
import { TopicsListProvider } from "./contexts/TopicsList.jsx";
import { SmallScreenProvider } from "./contexts/SmallScreen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoggedInUserProvider>
      <TopicsListProvider>
        <SmallScreenProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SmallScreenProvider>
      </TopicsListProvider>
    </LoggedInUserProvider>
  </StrictMode>
);
