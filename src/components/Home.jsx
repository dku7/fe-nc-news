import { useSearchParams } from "react-router-dom";
import ArticleList from "./ArticleList";
import Header from "./Header";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Header />
      <ArticleList
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </>
  );
};
export default Home;
