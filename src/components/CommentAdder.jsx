import { useContext, useReducer } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";
import { postNewComment } from "../services/api";
import { Link } from "react-router-dom";

import {
  commentsReducer,
  COMMENT_DISPATCH_SET_NEW_COMMENT,
  POST_COMMENT_INIT,
  POST_COMMENT_SUCCESSFUL,
  POST_COMMENT_UNSUCCESSFUL,
} from "../reducers/comments_reducers";

const CommentAdder = ({ article_id, handleAddCommentToList }) => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [comment, dispatchComments] = useReducer(commentsReducer, {
    data: "",
    commentStatus: "",
    isPostingEnabled: false,
  });

  const handleCommentChange = (event) =>
    dispatchComments({
      type: COMMENT_DISPATCH_SET_NEW_COMMENT,
      payload: event.target.value,
    });

  const submitComment = (event) => {
    event.preventDefault();
    dispatchComments({ type: POST_COMMENT_INIT });

    postNewComment(article_id, comment.data, loggedInUser.username)
      .then((newComment) => {
        handleAddCommentToList(newComment);
        dispatchComments({ type: POST_COMMENT_SUCCESSFUL });
      })
      .catch(() => dispatchComments({ type: POST_COMMENT_UNSUCCESSFUL }));
  };

  const addButton = loggedInUser ? (
    <button
      className={
        "mb-2 rounded border px-4 " +
        (comment.isPostingEnabled
          ? "bg-brand-primary text-white hover:bg-brand-tertiary hover:text-white"
          : " bg-gray-100 text-gray-800")
      }
      type="submit"
      disabled={!comment.isPostingEnabled}
    >
      Add
    </button>
  ) : (
    <p>
      <Link
        to="/login"
        className="font-semibold hover:text-brand-secondary hover:underline"
      >
        Log in
      </Link>{" "}
      to have your say.
    </p>
  );

  return (
    <div>
      <form onSubmit={submitComment}>
        <label htmlFor="comment-input">Add comment:</label>
        <textarea
          className="mb-4 mt-2 block w-full resize-none rounded border pl-1"
          name="comment-input"
          id="comment-input"
          value={comment.data}
          disabled={!loggedInUser}
          onChange={handleCommentChange}
        />
        {addButton}
      </form>
      <p>{comment.commentStatus}</p>
    </div>
  );
};

export default CommentAdder;
