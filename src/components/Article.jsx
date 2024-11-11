import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../services/api";
import ArticleHeader from "./ArticleHeader";
import ArticleFooter from "./ArticleFooter";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import CommentsList from "./CommentsList";
import NotFound from "./NotFound";
import MainContainer from "./MainContainer";
import Related from "./Related";

import {
  articlesReducer,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_SET_SINGLE_ARTICLE,
  FETCH_ARTICLES_NOT_FOUND,
  FETCH_ARTICLES_INIT,
} from "../reducers/articles_reducers";

const Article = () => {
  const { article_id } = useParams();
  const [article, dispatchArticle] = useReducer(articlesReducer, {
    data: [],
    isLoading: true,
    error: null,
    notFound: false,
  });

  useEffect(() => {
    dispatchArticle({ type: FETCH_ARTICLES_INIT });

    getArticleById(article_id)
      .then((article) =>
        dispatchArticle({
          type: FETCH_ARTICLES_SET_SINGLE_ARTICLE,
          payload: { article },
        }),
      )
      .catch((error) => {
        if (error.status === 400 || error.status === 404)
          dispatchArticle({ type: FETCH_ARTICLES_NOT_FOUND });
        else dispatchArticle({ type: FETCH_ARTICLES_ERROR, payload: error });
      });
  }, [article_id]);

  if (article.isLoading) return <LoadingDisplay />;
  if (article.notFound) return <NotFound />;
  if (article.error) return <ErrorDisplay error={error} />;

  return (
    <MainContainer article={article.data}>
      <div className="flex flex-wrap justify-evenly px-5">
        <main className="mt-4 w-full lg:w-3/5">
          <section>
            <ArticleHeader article={article.data} />
            <article className="py-4">
              <p className="leading-relaxed tracking-wide">
                {article.data.body}
              </p>
            </article>
            <ArticleFooter article={article.data} votingEnabled={true} />
          </section>
          <hr />
          <section>
            <CommentsList article_id={article_id} />
          </section>
        </main>
        <aside className="mt-4 w-full lg:w-1/5">
          <Related mainArticle={article.data} />
        </aside>
      </div>
    </MainContainer>
  );
};

export default Article;
