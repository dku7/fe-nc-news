import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Article from "./components/Article";
import { LoggedInUserContext } from "./contexts/LoggedInUser";
import NotFound from "./components/NotFound";
import { SmallScreenContext } from "./contexts/SmallScreen";

const App = () => {
  const { setIsSmallScreen } = useContext(SmallScreenContext);
  const { setLoggedInUser } = useContext(LoggedInUserContext);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    setLoggedInUser("cooljmessy"), [];

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:article_id" element={<Article />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
