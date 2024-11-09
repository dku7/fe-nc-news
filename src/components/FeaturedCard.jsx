import { useEffect, useState } from "react";
import ArticleHeader from "./ArticleHeader";
import LoadingDisplay from "./LoadingDisplay";
import { getArticleById } from "../services/api";

const FeaturedCard = ({ articleSummary }) => {
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getArticleById(articleSummary.article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <LoadingDisplay />;
  if (isError) return <p>Could not get featured article.</p>;

  return (
    <section>
      <header className="mb-4">
        <h2>
          <span className="border-brand-tertiary border-b-2 text-2xl font-extrabold">
            Featured article
          </span>
        </h2>
      </header>
      <ArticleHeader article={article} canClickTitle={true} />
      <p className="line-clamp-4 leading-relaxed md:tracking-wide">
        {article.body}
      </p>
    </section>
  );
};

export default FeaturedCard;
