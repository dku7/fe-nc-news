import { useEffect, useReducer } from "react";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import FeaturedCard from "./FeaturedCard";
import MainContainer from "./MainContainer";
import { getArticles } from "../services/api";
import { QUERY_PARAM_SORT_BY, QUERY_PARAM_ORDER_BY } from "../utils/constants";
import { getRandomSortBy, getRandomOrder } from "../utils/utils";
import {
  articlesReducer,
  FETCH_ARTICLES_INIT,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_SET_HOME_ARTICLES,
} from "../reducers/articles_reducers";
import ArticleList from "./ArticleList";
import ArticleCard from "./ArticleCard";

const Home = () => {
  const [articles, dispatchArticles] = useReducer(articlesReducer, {
    data: {},
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const articlesQueryParams = {
      [QUERY_PARAM_SORT_BY]: getRandomSortBy(),
      [QUERY_PARAM_ORDER_BY]: getRandomOrder(),
      limit: 50,
    };

    dispatchArticles({ type: FETCH_ARTICLES_INIT });

    getArticles(articlesQueryParams)
      .then((fetchedArticles) =>
        dispatchArticles({
          type: FETCH_ARTICLES_SET_HOME_ARTICLES,
          payload: { articles: fetchedArticles },
        }),
      )
      .catch((error) =>
        dispatchArticles({ type: FETCH_ARTICLES_ERROR, payload: error }),
      );
  }, []);

  if (articles.isLoading) return <LoadingDisplay />;
  if (articles.error) return <ErrorDisplay error={articles.error} />;

  return (
    <MainContainer>
      <div id="container" className="mb-5 flex flex-wrap justify-evenly p-5">
        <div id="top-section" className="flex flex-wrap justify-evenly px-5">
          <div className="mb-8 w-full md:w-5/12 lg:w-3/5">
            <FeaturedCard articleSummary={articles.data.featured} />
          </div>

          <div id="suggested" className="mb-7 w-full md:w-4/12 lg:w-1/5">
            <h3 className="mb-4">
              <span className="text-nowrap border-b-2 border-brand-tertiary text-lg font-bold">
                Suggested for you
              </span>
            </h3>
            <div className="border-l-0 border-gray-100 md:border-l md:px-5">
              <ArticleList
                articles={articles.data.suggested}
                showTopic={true}
              />
            </div>
          </div>
        </div>
        <section id="botton-section">
          <div className="flex flex-wrap">
            <header className="w-full text-center">
              <h3 className="mb-4">
                <span className="border-b-2 border-brand-tertiary text-xl font-extrabold">
                  Trending articles
                </span>
              </h3>
            </header>
            <div className="flex flex-wrap justify-evenly">
              {articles.data.trending.map((article) => (
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
