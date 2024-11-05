import { XMarkIcon } from "@heroicons/react/20/solid";

const CommentFooter = ({ comment }) => (
  <div className="flex justify-between">
    <span className="">votes: {comment.votes}</span>
    <button title="Delete comment">
      <XMarkIcon className="size-6 text-black" />
    </button>
  </div>
);

export default CommentFooter;
