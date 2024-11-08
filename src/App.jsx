import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Article from "./components/Article";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { SmallScreenContext } from "./contexts/SmallScreen";
import { LoggedInUserContext } from "./contexts/LoggedInUser";

const App = () => {
  const { setIsSmallScreen } = useContext(SmallScreenContext);
  const { setLoggedInUser } = useContext(LoggedInUserContext);

  useEffect(() => {
    const previouslyLoggedInUser = JSON.parse(
      localStorage.getItem("loggedInUser")
    );
    setLoggedInUser(previouslyLoggedInUser);

    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:article_id" element={<Article />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
