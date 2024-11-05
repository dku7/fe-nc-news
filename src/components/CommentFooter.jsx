import { XMarkIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { LoggedInUserContext } from "../contexts/LoggedInUser";

const CommentFooter = ({ comment }) => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const showDeleteButton = () => (
    <button title="Delete comment">
      <XMarkIcon className="size-6 text-black" />
    </button>
  );

  return (
    <div className="flex justify-between">
      <span className="">votes: {comment.votes}</span>
      {loggedInUser === comment.author ? showDeleteButton() : null}
    </div>
  );
};

export default CommentFooter;
