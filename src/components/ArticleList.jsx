import { useEffect, useState } from "react";
import { getArticles } from "../services/api";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import ArticleCard from "./ArticleCard";
import ArticleSorter from "./ArticleSorter";
import {
  QUERY_PARAM_SORT_BY,
  QUERY_PARAM_DEFAULT_SORT_BY_VALUE,
} from "../utils/constants";

const DEFAULT_LIMIT = 1000;

const parseQueryParams = (searchParams) => {
  const queryTopic = searchParams.get("topic");
  const querySortBy =
    searchParams.get(QUERY_PARAM_SORT_BY) ?? QUERY_PARAM_DEFAULT_SORT_BY_VALUE;

  return {
    topic: queryTopic,
    sort_by: querySortBy,
    limit: DEFAULT_LIMIT,
  };
};

const ArticleList = ({ searchParams, setSearchParams }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [topic, setTopic] = useState("");
  const [sortBy, setSortBy] = useState(QUERY_PARAM_DEFAULT_SORT_BY_VALUE);

  const handleSortChange = (param, value) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(param, value);

    setSearchParams(newParams);

    if (param === QUERY_PARAM_SORT_BY) setSortBy(value);
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const queryParams = parseQueryParams(searchParams);

    setTopic(queryParams.topic);
    setSortBy(queryParams.sort_by);

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
          <h2 className="text-3xl font-semibold capitalize">
            {topic ? topic : "All articles"}
          </h2>
        </header>
        <div className="my-4">
          <ArticleSorter sortBy={sortBy} handleSortChange={handleSortChange} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ArticleList;
