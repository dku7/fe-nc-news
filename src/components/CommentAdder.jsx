import { useContext, useEffect, useState } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";
import {
  COMMENT_STATUS_POST_IN_PROGRESS,
  COMMENT_STATUS_POST_SUCCESSFUL,
  COMMENT_STATUS_POST_UNSUCCESSFUL,
} from "../utils/constants";
import { postNewComment } from "../services/api";

const CommentAdder = ({ article_id, updateCommentsList }) => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [comment, setComment] = useState("");
  const [commentStatus, setCommentStatus] = useState("");
  const [isPostingEnabled, setIsPostingEnabled] = useState(false);

  const handleCommentChange = (event) => {
    const newComment = event.target.value;

    setComment(newComment);
    setIsPostingEnabled(newComment);
  };

  useEffect(() => setCommentStatus(""), [loggedInUser]);

  const submitComment = (event) => {
    event.preventDefault();
    setCommentStatus(COMMENT_STATUS_POST_IN_PROGRESS);
    setIsPostingEnabled(false);

    postNewComment(article_id, comment, loggedInUser.username)
      .then((newComment) => {
        updateCommentsList((currentList) => [newComment, ...currentList]);

        setCommentStatus(COMMENT_STATUS_POST_SUCCESSFUL);
        setIsPostingEnabled(true);
        setComment("");
      })
      .catch(() => {
        setCommentStatus(COMMENT_STATUS_POST_UNSUCCESSFUL);
        setIsPostingEnabled(true);
      });
  };

  const checkUserIsLoggedIn = () =>
    loggedInUser ? (
      <button
        className={
          "mb-2 rounded border px-4 " +
          (isPostingEnabled
            ? "bg-brand-primary hover:bg-brand-tertiary text-white hover:text-white"
            : " bg-gray-100 text-gray-800")
        }
        type="submit"
        disabled={!isPostingEnabled}
      >
        Add
      </button>
    ) : (
      <p>Log in to have your say.</p>
    );

  return (
    <div>
      <form onSubmit={submitComment}>
        <label htmlFor="comment-input">Add comment:</label>
        <textarea
          className="mb-4 mt-2 block w-full resize-none rounded border pl-1"
          name="comment-input"
          id="comment-input"
          value={comment}
          disabled={!loggedInUser}
          onChange={handleCommentChange}
        />
        {checkUserIsLoggedIn()}
      </form>
      <p>{commentStatus}</p>
    </div>
  );
};

export default CommentAdder;
