import { useSearchParams } from "react-router-dom";
import ArticleList from "./ArticleList";
import MainContainer from "./MainContainer";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <MainContainer searchParams={searchParams}>
      <ArticleList
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </MainContainer>
  );
};
export default Home;
