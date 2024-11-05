import { useEffect, useState } from "react";
import { getArticles } from "../services/api";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ searchParams }) => {
  const DEFAULT_LIMIT = 1000;

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    const queryTopic = searchParams.get("topic");
    const queryParams = { topic: queryTopic, limit: DEFAULT_LIMIT };

    setTopic(queryTopic);

    setIsLoading(true);
    setIsError(false);

    getArticles(queryParams)
      .then((articles) => setArticles(articles))
      .catch(() => setIsError(true))
      .finally(setIsLoading(false));
  }, [searchParams]);

  if (isLoading) return <LoadingDisplay />;
  if (isError) return <ErrorDisplay />;

  return (
    <main>
      <header>
        <h2 className="text-3xl font-semibold m-5 capitalize">
          {topic ? topic : "All articles"}
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </main>
  );
};

export default ArticleList;
