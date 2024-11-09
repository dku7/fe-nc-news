import { useEffect, useState } from "react";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import FeaturedCard from "./FeaturedCard";
import MainContainer from "./MainContainer";
import { getArticles } from "../services/api";
import { QUERY_PARAM_SORT_BY, QUERY_PARAM_ORDER_BY } from "../utils/constants";
import { getRandomSortBy, getRandomOrder } from "../utils/utils";
import ArticleList from "./ArticleList";
import ArticleCard from "./ArticleCard";

const Home = () => {
  const [featured, setFeatured] = useState();
  const [suggested, setSuggested] = useState([]);
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const articlesQueryParams = {
      [QUERY_PARAM_SORT_BY]: getRandomSortBy(),
      [QUERY_PARAM_ORDER_BY]: getRandomOrder(),
      limit: 50,
    };
    setIsLoading(true);
    setError(null);

    getArticles(articlesQueryParams)
      .then((articles) => {
        setFeatured(articles[0]);
        setSuggested(articles.slice(1, 6));
        setTrending(articles.slice(10, 15));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(error);
      });
  }, []);

  if (isLoading) return <LoadingDisplay />;
  if (error) return <ErrorDisplay error={error} />;

  return (
    <MainContainer>
      <div id="container" className="flex flex-wrap justify-evenly p-5">
        <div id="top-section" className="flex flex-wrap justify-evenly px-5">
          <div className="mb-8 w-full md:w-5/12 lg:w-3/5">
            <FeaturedCard articleSummary={featured} />
          </div>

          <div id="suggested" className="mb-7 w-full md:w-4/12 lg:w-1/5">
            <h3 className="mb-4">
              <span className="border-brand-tertiary text-nowrap border-b-2 text-lg font-bold">
                Suggested for you
              </span>
            </h3>
            <div className="border-l-0 border-gray-100 md:border-l md:px-5">
              <ArticleList articles={suggested} showTopic={true} />
            </div>
          </div>
        </div>
        <section id="botton-section">
          <div className="flex flex-wrap">
            <header className="w-full text-center">
              <h3 className="mb-4">
                <span className="border-brand-tertiary border-b-2 text-xl font-extrabold">
                  Trending articles
                </span>
              </h3>
            </header>
            <div className="flex flex-wrap justify-evenly">
              {trending.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainContainer>
  );
};

export default Home;
