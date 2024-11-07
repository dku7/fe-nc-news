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
      .then((article) => setArticle(article))
      .catch((error) => {
        if (error.status === 400 || error.status === 404) setIsNotFound(true);
        else setIsError(true);
      })
      .finally(setIsLoading(false));
  }, []);

  if (isLoading) return <LoadingDisplay />;
  if (isNotFound) return <NotFound />;
  if (isError) return <ErrorDisplay />;

  return (
    <MainContainer article={article}>
      <main className="my-10 w-full md:w-4/5 sm:px-8">
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
