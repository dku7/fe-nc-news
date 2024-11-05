import { useEffect, useState } from "react";
import { getArticles } from "../services/api";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import ArticleCard from "./ArticleCard";
import ArticleSorter from "./ArticleSorter";

const ArticleList = ({ searchParams, setSearchParams }) => {
  const DEFAULT_LIMIT = 1000;

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [topic, setTopic] = useState("");

  const handleSortByChange = (sortBy) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sortBy);

    setSearchParams(newParams);
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    const queryTopic = searchParams.get("topic");
    const querySortBy = searchParams.get("sort_by");

    const queryParams = {
      topic: queryTopic,
      sort_by: querySortBy,
      limit: DEFAULT_LIMIT,
    };

    setTopic(queryTopic);

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
          <ArticleSorter handleSortByChange={handleSortByChange} />
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
