import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../services/api";
import Header from "./Header";
import ArticleHeader from "./ArticleHeader";
import ArticleFooter from "./ArticleFooter";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import CommentsList from "./CommentsList";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getArticleById(article_id)
      .then((article) => setArticle(article))
      .catch(() => setIsError(true))
      .finally(setIsLoading(false));
  }, []);

  if (isLoading) return <LoadingDisplay />;
  if (isError) return <ErrorDisplay />;

  return (
    <>
      <Header />
      <main className="mx-10 md:mx-28 lg:mx-72">
        <section className="mb-10 px-4">
          <ArticleHeader article={article} />
          <article className="py-4">
            <p className="leading-relaxed">{article.body}</p>
          </article>
          <ArticleFooter article={article} votingEnabled={true} />
        </section>
        <hr />
        <section>
          <CommentsList article_id={article_id} />
        </section>
      </main>
    </>
  );
};

export default Article;
