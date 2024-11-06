import { useSearchParams } from "react-router-dom";
import ArticleList from "./ArticleList";
import Menu from "./Menu";
import Header from "./Header";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="flex">
        <Menu className="h-screen sticky top-0" />
        <div className="h-full flex-1 mx-20">
          <ArticleList
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
