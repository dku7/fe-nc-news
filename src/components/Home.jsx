import { useSearchParams } from "react-router-dom";
import ArticleGrid from "./ArticleGrid";
import MainContainer from "./MainContainer";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <MainContainer searchParams={searchParams}>
      <ArticleGrid
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </MainContainer>
  );
};
export default Home;
