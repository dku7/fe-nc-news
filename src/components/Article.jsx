import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../services/api";
import ArticleHeader from "./ArticleHeader";
import ArticleFooter from "./ArticleFooter";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import CommentsList from "./CommentsList";
import NotFound from "./NotFound";
import MainContainer from "./MainContainer";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.status === 400 || error.status === 404) setIsNotFound(true);
        else setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <LoadingDisplay />;
  if (isNotFound) return <NotFound />;
  if (isError) return <ErrorDisplay />;

  return (
    <MainContainer article={article}>
      <main className="mx-2 mt-4 w-full sm:px-8 md:mx-28 md:w-4/5 lg:mx-60">
        <section>
          <ArticleHeader article={article} />
          <article className="py-4">
            <p className="leading-relaxed tracking-wide">{article.body}</p>
          </article>
          <ArticleFooter article={article} votingEnabled={true} />
        </section>
        <hr />
        <section>
          <CommentsList article_id={article_id} />
        </section>
      </main>
    </MainContainer>
  );
};

export default Article;
