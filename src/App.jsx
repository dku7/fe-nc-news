import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Article from "./components/Article";
import { LoggedInUserContext } from "./contexts/LoggedInUser";

const App = () => {
  const { setLoggedInUser } = useContext(LoggedInUserContext);

  useEffect(() => setLoggedInUser("cooljmessy"), []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:article_id" element={<Article />} />
    </Routes>
  );
};

export default App;
