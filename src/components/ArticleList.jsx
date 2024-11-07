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
} from "../utils/constants";

const DEFAULT_LIMIT = 1000;

const parseQueryParams = (searchParams) => {
  const queryTopic = searchParams.get("topic");
  const querySortBy =
    searchParams.get(QUERY_PARAM_SORT_BY) ?? QUERY_PARAM_DEFAULT_SORT_BY_VALUE;
  const queryOrderBy =
    searchParams.get(QUERY_PARAM_ORDER_BY) ??
    QUERY_PARAM_DEFAULT_ORDER_BY_VALUE;

  return {
    topic: queryTopic,
    [QUERY_PARAM_SORT_BY]: querySortBy,
    [QUERY_PARAM_ORDER_BY]: queryOrderBy,
    limit: DEFAULT_LIMIT,
  };
};

const ArticleList = ({ searchParams, setSearchParams }) => {
  const redirect = useNavigate();
  const { topicsList } = useContext(TopicsListContext);

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [topic, setTopic] = useState({});
  const [sortBy, setSortBy] = useState(QUERY_PARAM_DEFAULT_SORT_BY_VALUE);
  const [orderBy, setOrderBy] = useState(QUERY_PARAM_DEFAULT_ORDER_BY_VALUE);

  const handleSortChange = (param, value) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(param, value);

    setSearchParams(newParams);

    if (param === QUERY_PARAM_SORT_BY) setSortBy(value);
    else if (param === QUERY_PARAM_ORDER_BY) setOrderBy(value);
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const queryParams = parseQueryParams(searchParams);
    const queryTopic = queryParams.topic;

    setSortBy(queryParams[QUERY_PARAM_SORT_BY]);
    setOrderBy(queryParams[QUERY_PARAM_ORDER_BY]);

    if (queryTopic) {
      const foundTopic = topicsList.find((topic) => topic.slug === queryTopic);
      setTopic(foundTopic);

      if (!foundTopic) redirect("/notfound");
    } else setTopic(null);

    getArticles(queryParams)
      .then((articles) => setArticles(articles))
      .catch(() => setIsError(true))
      .finally(setIsLoading(false));
  }, [searchParams]);

  if (isLoading) return <LoadingDisplay />;
  if (isError) return <ErrorDisplay />;

  return (
    <div className="m-5">
      <main>
        <header>
          <h2 className="text-xl md:text-3xl font-semibold capitalize">
            {topic?.slug ?? "All articles"}
          </h2>
          <p className="py-2 text-sm text-gray-700 lowercase">
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
  );
};

export default ArticleList;
