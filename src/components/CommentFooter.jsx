import { XMarkIcon } from "@heroicons/react/20/solid";
import { useContext, useState } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";
import {
  COMMENT_STATUS_DELETE_IN_PROGRESS,
  COMMENT_STATUS_DELETE_SUCCESSFUL,
  COMMENT_STATUS_DELETE_UNSUCCESSFUL,
  VOTE_TYPE_COMMENT,
} from "../utils/constants";
import { deleteComment } from "../services/api";
import VotingBar from "./VotingBar";

const CommentFooter = ({ comment, handleDeleteCommentFromList }) => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [deleteStatus, setDeleteStatus] = useState("");
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(true);

  const handleDeleteComment = () => {
    setDeleteStatus(COMMENT_STATUS_DELETE_IN_PROGRESS);
    setIsDeleteEnabled(false);

    deleteComment(comment.comment_id)
      .then(() => {
        handleDeleteCommentFromList(comment.comment_id);

        setDeleteStatus(COMMENT_STATUS_DELETE_SUCCESSFUL);
      })
      .catch(() => {
        setDeleteStatus(COMMENT_STATUS_DELETE_UNSUCCESSFUL);
        setIsDeleteEnabled(true);
      });
  };

  const showDeleteButton = () => (
    <div className="text-right">
      <button
        title="Delete comment"
        disabled={!isDeleteEnabled}
        onClick={handleDeleteComment}
      >
        <XMarkIcon className="size-6 text-brand-secondary" />
      </button>
      <p>{deleteStatus}</p>
    </div>
  );

  const displayVotingArea = () =>
    loggedInUser?.username !== comment.author ? (
      <VotingBar
        recordType={VOTE_TYPE_COMMENT}
        recordId={comment.comment_id}
        currentVotes={comment.votes}
      />
    ) : (
      <>{comment.votes} votes</>
    );

  return (
    <div className="flex justify-between">
      <div>{displayVotingArea()}</div>
      {loggedInUser?.username === comment.author ? showDeleteButton() : null}
    </div>
  );
};

export default CommentFooter;
