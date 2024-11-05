import { XMarkIcon } from "@heroicons/react/20/solid";
import { useContext, useState } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";
import {
  COMMENT_STATUS_DELETE_IN_PROGRESS,
  COMMENT_STATUS_DELETE_SUCCESSFUL,
  COMMENT_STATUS_DELETE_UNSUCCESSFUL,
} from "../utils/constants";

const CommentFooter = ({ comment }) => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [deleteStatus, setDeleteStatus] = useState("");
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(true);

  const handleDeleteComment = () => {
    setDeleteStatus(COMMENT_STATUS_DELETE_IN_PROGRESS);
  };

  const showDeleteButton = () => (
    <div className="text-right">
      <button
        title="Delete comment"
        disabled={!isDeleteEnabled}
        onClick={handleDeleteComment}>
        <XMarkIcon className="size-6 text-black" />
      </button>
      <p>{deleteStatus}</p>
    </div>
  );

  return (
    <div className="flex justify-between">
      <span className="">votes: {comment.votes}</span>
      {loggedInUser === comment.author ? showDeleteButton() : null}
    </div>
  );
};

export default CommentFooter;
