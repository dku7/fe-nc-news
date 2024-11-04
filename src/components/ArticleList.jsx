import { useEffect, useState } from "react";
import { getArticles } from "../services/api";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getArticles()
      .then((articles) => setArticles(articles))
      .catch(() => setIsError(true))
      .finally(setIsLoading(false));
  }, []);

  if (isLoading) return <LoadingDisplay />;
  if (isError) return <ErrorDisplay />;

  return (
    <main>
      <header>
        <h2 className="text-3xl font-semibold m-5">All articles</h2>
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
