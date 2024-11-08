import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getArticles } from "../services/api";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import ArticleCard from "./ArticleCard";
import ArticleSorter from "./ArticleSorter";
import { TopicsListContext } from "../contexts/TopicsList";
import {
  QUERY_PARAM_SORT_BY,
  QUERY_PARAM_DEFAULT_SORT_BY_VALUE,
  QUERY_PARAM_ORDER_BY,
  QUERY_PARAM_DEFAULT_ORDER_BY_VALUE,
  QUERY_PARAM_LIMIT,
  QUERY_PARAM_DEFAULT_LIMIT,
  QUERY_PARAM_PAGE,
  QUERY_PARAM_DEFAULT_PAGE,
} from "../utils/constants";
import Paginator from "./Paginator";

const parseQueryParams = (searchParams) => {
  const queryTopic = searchParams.get("topic");
  const querySortBy =
    searchParams.get(QUERY_PARAM_SORT_BY) ?? QUERY_PARAM_DEFAULT_SORT_BY_VALUE;
  const queryOrderBy =
    searchParams.get(QUERY_PARAM_ORDER_BY) ??
    QUERY_PARAM_DEFAULT_ORDER_BY_VALUE;
  const queryLimit =
    searchParams.get(QUERY_PARAM_LIMIT) ?? QUERY_PARAM_DEFAULT_LIMIT;
  const queryPage =
    searchParams.get(QUERY_PARAM_PAGE) ?? QUERY_PARAM_DEFAULT_PAGE;

  return {
    topic: queryTopic,
    [QUERY_PARAM_SORT_BY]: querySortBy,
    [QUERY_PARAM_ORDER_BY]: queryOrderBy,
    [QUERY_PARAM_LIMIT]: queryLimit,
    [QUERY_PARAM_PAGE]: queryPage,
  };
};

const ArticleList = ({ searchParams, setSearchParams }) => {
  const navigateTo = useNavigate();
  const { topicsList } = useContext(TopicsListContext);

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [topic, setTopic] = useState({});
  const [sortBy, setSortBy] = useState(QUERY_PARAM_DEFAULT_SORT_BY_VALUE);
  const [orderBy, setOrderBy] = useState(QUERY_PARAM_DEFAULT_ORDER_BY_VALUE);
  const [limit, setLimit] = useState(QUERY_PARAM_DEFAULT_LIMIT);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  const getNewSearchParams = (existingParams, param, value) => {
    const newParams = new URLSearchParams(existingParams);
    newParams.set(param, value);
    return newParams;
  };

  const handleSortChange = (param, value) => {
    const newParams = getNewSearchParams(searchParams, param, value);
    setSearchParams(newParams);

    if (param === QUERY_PARAM_SORT_BY) setSortBy(value);
    else if (param === QUERY_PARAM_ORDER_BY) setOrderBy(value);
  };

  const handlePageChange = (step) => {
    const newParams = getNewSearchParams(
      searchParams,
      QUERY_PARAM_PAGE,
      Number(page) + Number(step),
    );
    setSearchParams(newParams);
    setPage((curPage) => {
      curPage + step;
    });
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const queryParams = parseQueryParams(searchParams);
    const queryTopic = queryParams.topic;

    setSortBy(queryParams[QUERY_PARAM_SORT_BY]);
    setOrderBy(queryParams[QUERY_PARAM_ORDER_BY]);
    setLimit(queryParams[QUERY_PARAM_LIMIT]);
    setPage(queryParams[QUERY_PARAM_PAGE]);

    if (queryTopic) {
      const foundTopic = topicsList.find((topic) => topic.slug === queryTopic);
      setTopic(foundTopic);

      if (!foundTopic) navigateTo("/notfound");
    } else setTopic(null);

    getArticles(queryParams)
      .then((articles) => {
        setArticles(articles);
        setIsLastPage(articles.length < limit);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [searchParams]);

  if (isLoading) return <LoadingDisplay />;
  if (isError) return <ErrorDisplay />;

  return (
    <div>
      <div className="mx-5 mt-4 lg:mx-12 xl:mx-16 2xl:mx-28">
        <main>
          <header>
            <h2 className="text-xl font-semibold capitalize md:text-3xl">
              {topic?.slug ?? "All articles"}
            </h2>
            <p className="py-2 text-sm lowercase text-gray-700">
              {topic?.description}
            </p>
          </header>
          <div className="my-4">
            <ArticleSorter
              sortBy={sortBy}
              orderBy={orderBy}
              handleSortChange={handleSortChange}
            />
          </div>
          <div className="flex flex-wrap">
            {articles.map((article) => (
              <ArticleCard key={article.article_id} article={article} />
            ))}
          </div>
        </main>
      </div>
      <div className="mx-6 mb-10 mt-4 flex lg:mx-14 xl:-mx-16 2xl:mx-32">
        <Paginator
          handlePageChange={handlePageChange}
          currentPage={page}
          isLastPage={isLastPage}
        />
      </div>
    </div>
  );
};

export default ArticleList;
