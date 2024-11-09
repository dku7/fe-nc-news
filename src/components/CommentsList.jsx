import { useEffect, useState } from "react";
import { getArticleComments } from "../services/api";
import CommentCard from "./CommentCard";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";
import CommentAdder from "./CommentAdder";
import Paginator from "./Paginator";
import { QUERY_PARAM_DEFAULT_COMMENT_LIMIT } from "../utils/constants";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  const handlePageChange = (step) => {
    const nextPage = page + (step ?? 0);

    setComments([]);
    setPage(nextPage);
    setIsLoading(true);
    setIsError(false);

    getArticleComments(article_id, QUERY_PARAM_DEFAULT_COMMENT_LIMIT, nextPage)
      .then((comments) => {
        setComments(comments);
        setIsLastPage(comments.length < QUERY_PARAM_DEFAULT_COMMENT_LIMIT);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => handlePageChange(1), []);

  return (
    <>
      <section className="mt-10">
        <header className="mb-4">
          <h2 className="text-xl font-bold">
            <span className="border-brand-tertiary border-b-2">Comments</span>
          </h2>
        </header>

        <div className="mb-10">
          <CommentAdder
            article_id={article_id}
            updateCommentsList={setComments}
          />
        </div>

        {isLoading && <LoadingDisplay />}
        {isError && <p>There was an error loading comments for the article.</p>}

        <div>
          {comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              updateCommentsList={setComments}
            />
          ))}
        </div>
      </section>
      <div>
        <Paginator
          handlePageChange={handlePageChange}
          currentPage={page}
          isLastPage={isLastPage}
        />
      </div>
    </>
  );
};

export default CommentsList;
