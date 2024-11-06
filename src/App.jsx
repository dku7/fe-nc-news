import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Article from "./components/Article";
import { LoggedInUserContext } from "./contexts/LoggedInUser";
import NotFound from "./components/NotFound";

const App = () => {
  const { setLoggedInUser } = useContext(LoggedInUserContext);

  useEffect(() => setLoggedInUser("cooljmessy"), []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:article_id" element={<Article />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
