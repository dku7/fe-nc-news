import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Article from "./components/Article";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles/:article_id" element={<Article />} />
    </Routes>
  );
};

export default App;
