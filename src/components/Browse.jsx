import { useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getArticles } from "../services/api";
import { getTopics } from "../services/api";
import MainContainer from "./MainContainer";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import ArticleCard from "./ArticleCard";
import ArticleSorter from "./ArticleSorter";
import {
  QUERY_PARAM_SORT_BY,
  QUERY_PARAM_ORDER_BY,
  QUERY_PARAM_PAGE,
} from "../utils/constants";
import Paginator from "./Paginator";
import {
  articlesReducer,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_SET_BROWSE_RESULTS,
  FETCH_BROWSE_ARTICLES_INIT,
  FETCH_ARTICLES_BROWSE_PARAMS_UPDATE,
} from "../reducers/articles_reducers";
import { parseQueryParams, addNewSearchParam } from "../utils/utils";

const Browse = () => {
  const navigateTo = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, dispatchArticles] = useReducer(articlesReducer, {
    data: [],
    isLoading: true,
    error: null,
    topic: {},
    searchParams: {},
  });

  const handleSortChange = (param, value) => {
    const newParams = addNewSearchParam(searchParams, param, value);
    setSearchParams(newParams);

    dispatchArticles({
      type: FETCH_ARTICLES_BROWSE_PARAMS_UPDATE,
      payload: { param, value },
    });
  };

  const handlePageChange = (step) => {
    const newPage = articles.searchParams[QUERY_PARAM_PAGE] + step;
    const newParams = addNewSearchParam(
      searchParams,
      QUERY_PARAM_PAGE,
      newPage,
    );
    setSearchParams(newParams);

    dispatchArticles({
      type: FETCH_ARTICLES_BROWSE_PARAMS_UPDATE,
      payload: { [QUERY_PARAM_PAGE]: newPage },
    });
  };

  useEffect(() => {
    const parsedParams = parseQueryParams(searchParams);
    let foundTopic = "";

    if (parsedParams.topic) {
      getTopics().then((topics) => {
        foundTopic = topics.find((topic) => topic.slug === parsedParams.topic);

        if (!foundTopic) navigateTo("/notfound");
      });
    }

    dispatchArticles({
      type: FETCH_BROWSE_ARTICLES_INIT,
      payload: { searchParams: parsedParams, topic: foundTopic },
    });

    getArticles(parsedParams)
      .then((articles) => {
        dispatchArticles({
          type: FETCH_ARTICLES_SET_BROWSE_RESULTS,
          payload: articles,
        });
      })
      .catch((error) =>
        dispatchArticles({ type: FETCH_ARTICLES_ERROR, payload: error }),
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  if (articles.isLoading) return <LoadingDisplay />;
  if (articles.error) return <ErrorDisplay error={articles.error} />;

  return (
    <MainContainer searchParams={searchParams}>
      <div>
        <div className="mx-5 mt-4 lg:mx-12 xl:mx-16 2xl:mx-28">
          <main>
            <header>
              <h2 className="text-xl font-bold capitalize md:text-2xl lg:text-3xl">
                <span className="border-b-2 border-brand-tertiary">
                  {articles.topic?.slug ?? "All topics"}
                </span>
              </h2>
              <p className="py-2 text-sm lowercase text-gray-700">
                {articles.topic?.description}
              </p>
            </header>
            <div className="my-4">
              <ArticleSorter
                sortBy={articles.searchParams[QUERY_PARAM_SORT_BY]}
                orderBy={articles.searchParams[QUERY_PARAM_ORDER_BY]}
                handleSortChange={handleSortChange}
              />
            </div>
            <div className="flex flex-wrap">
              {articles.data.map((article) => (
                <ArticleCard key={article.article_id} article={article} />
              ))}
            </div>
          </main>

          <div className="ml-4">
            <Paginator
              handlePageChange={handlePageChange}
              currentPage={articles.searchParams[QUERY_PARAM_PAGE]}
              isLastPage={articles.isLastPage}
            />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Browse;
