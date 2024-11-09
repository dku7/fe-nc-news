import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import { getArticles } from "../services/api";
import { QUERY_PARAM_SORT_BY, QUERY_PARAM_ORDER_BY } from "../utils/constants";
import { getRandomOrder, getRandomSortBy } from "../utils/utils";

const Related = ({ mainArticle }) => {
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const articlesQueryParams = {
      topic: mainArticle.topic,
      [QUERY_PARAM_SORT_BY]: getRandomSortBy(),
      [QUERY_PARAM_ORDER_BY]: getRandomOrder(),
      limit: 10,
    };

    setIsLoading(true);
    setIsError(false);
    getArticles(articlesQueryParams)
      .then((articles) => {
        const filteredArticles = articles
          .filter((article) => article.article_id !== mainArticle.article_id)
          .slice(0, 5);

        setRelatedArticles(filteredArticles);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Could not get list of related articles.</p>;

  return (
    <div>
      <header>
        <h3 className="mb-2 font-semibold">
          <span className="border-brand-tertiary border-b-2">
            Related articles
          </span>
        </h3>
      </header>
      <ArticleList articles={relatedArticles} />
    </div>
  );
};

export default Related;
