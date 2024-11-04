import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../services/api";
import Header from "./Header";
import ArticleHeader from "./ArticleHeader";
import ArticleFooter from "./ArticleFooter";
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

  return (
    <>
      <Header />
      <main className="mx-20">
        <section>
          <ArticleHeader article={article} />
          <article className="my-4">
            <p className="leading-relaxed">{article.body}</p>
          </article>
          <ArticleFooter article={article} />
        </section>
      </main>
    </>
  );
};

export default Article;
