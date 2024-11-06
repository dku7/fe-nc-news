import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../services/api";
import Header from "./Header";
import ArticleHeader from "./ArticleHeader";
import ArticleFooter from "./ArticleFooter";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import CommentsList from "./CommentsList";
import NotFound from "./NotFound";
import Menu from "./Menu";

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
    /*
      <>
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="flex">
        <Menu className="h-screen sticky top-0" />
        <div className="h-full flex-1 mx-20">
          <ArticleList
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </div>
      </div>
    </>
    */
    <>
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="flex">
        <Menu className="h-screen sticky top-0" />
        <div className="h-full flex-1 mx-10 md:mx-28 lg:mx-48 mt-10">
          <main>
            <section className="mb-10 px-4">
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
        </div>
      </div>
    </>
  );
};

export default Article;
