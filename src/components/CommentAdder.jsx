import { useContext, useState } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";
import {
  COMMENT_STATUS_POST_IN_PROGRESS,
  COMMENT_STATUS_POST_SUCCESSFUL,
  COMMENT_STATUS_POST_UNSUCCESSFUL,
} from "../utils/constants";
import { postNewComment } from "../services/api";

const CommentAdder = ({ article_id, updateCommentsList }) => {
  const DISABLED_BUTTON_CLASS =
    "border rounded px-4 bg-gray-100 text-gray-800 mb-2";
  const ENABLED_BUTTON_CLASS =
    "border rounded px-4 bg-gray-800 text-white mb-2";

  const { loggedInUser } = useContext(LoggedInUserContext);
  const [comment, setComment] = useState("");
  const [commentStatus, setCommentStatus] = useState("");
  const [isPostingEnabled, setIsPostingEnabled] = useState(false);

  const handleCommentChange = (event) => {
    const newComment = event.target.value.trim();

    setComment(newComment);
    setIsPostingEnabled(newComment);
  };
  const submitComment = (event) => {
    event.preventDefault();
    setCommentStatus(COMMENT_STATUS_POST_IN_PROGRESS);

    postNewComment(article_id, comment, loggedInUser)
      .then((newComment) => {
        updateCommentsList((currentList) => [newComment, ...currentList]);

        setCommentStatus(COMMENT_STATUS_POST_SUCCESSFUL);
      })
      .catch(COMMENT_STATUS_POST_UNSUCCESSFUL);
  };

  return (
    <div>
      <form onSubmit={submitComment}>
        <label htmlFor="comment-input">Add comment:</label>
        <textarea
          className="block border rounded w-full resize-none mt-2 mb-4"
          name="comment-input"
          id="comment-input"
          value={comment}
          onChange={handleCommentChange}
        />
        <button
          className={
            isPostingEnabled ? ENABLED_BUTTON_CLASS : DISABLED_BUTTON_CLASS
          }
          type="submit"
          disabled={!isPostingEnabled}>
          Add
        </button>
      </form>
      <p>{commentStatus}</p>
    </div>
  );
};

export default CommentAdder;
