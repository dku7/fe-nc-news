import { useEffect, useReducer } from "react";
import { getArticleComments } from "../services/api";
import CommentCard from "./CommentCard";
import LoadingDisplay from "./LoadingDisplay";
import CommentAdder from "./CommentAdder";
import Paginator from "./Paginator";
import { QUERY_PARAM_DEFAULT_COMMENT_LIMIT } from "../utils/constants";
import {
  commentsReducer,
  FETCH_COMMENTS_INIT,
  FETCH_COMMENTS_ERROR,
  FETCH_COMMENTS_SET_COMMENTS,
  COMMENT_DISPATCH_ADD_NEW_COMMENT,
  COMMENT_DISPATCH_DELETE_COMMENT,
} from "../reducers/comments_reducers";

const CommentsList = ({ article_id }) => {
  const [comments, dispatchComments] = useReducer(commentsReducer, {
    data: [],
    isLoading: true,
    error: null,
    page: 0,
    isLastPage: false,
  });

  const handleAddCommentToList = (newComment) =>
    dispatchComments({
      type: COMMENT_DISPATCH_ADD_NEW_COMMENT,
      payload: newComment,
    });

  const handleDeleteCommentFromList = (comment_id) => {
    dispatchComments({
      type: COMMENT_DISPATCH_DELETE_COMMENT,
      payload: comment_id,
    });
  };
  const handlePageChange = (step) => {
    const nextPage = comments.page + (step ?? 0);

    dispatchComments({
      type: FETCH_COMMENTS_INIT,
      payload: { page: nextPage },
    });

    getArticleComments(article_id, QUERY_PARAM_DEFAULT_COMMENT_LIMIT, nextPage)
      .then((comments) => {
        dispatchComments({
          type: FETCH_COMMENTS_SET_COMMENTS,
          payload: { comments, page: nextPage },
        });
      })
      .catch((error) =>
        dispatchComments({ type: FETCH_COMMENTS_ERROR, payload: error }),
      );
  };

  useEffect(() => handlePageChange(1), []);

  return (
    <>
      <section className="mt-10">
        <header className="mb-4">
          <h2 className="text-xl font-bold">
            <span className="border-b-2 border-brand-tertiary">Comments</span>
          </h2>
        </header>

        <div className="mb-10">
          <CommentAdder
            article_id={article_id}
            handleAddCommentToList={handleAddCommentToList}
          />
        </div>

        {comments.isLoading && <LoadingDisplay />}
        {comments.error && (
          <p>There was an error loading comments for the article.</p>
        )}

        <div>
          {comments.data.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              handleDeleteCommentFromList={handleDeleteCommentFromList}
            />
          ))}
        </div>
      </section>
      <div>
        <Paginator
          handlePageChange={handlePageChange}
          currentPage={comments.page}
          isLastPage={comments.isLastPage}
        />
      </div>
    </>
  );
};

export default CommentsList;
