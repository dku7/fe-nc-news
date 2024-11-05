import { formatDateTime } from "../utils/utils";
import CommentFooter from "./CommentFooter";

const CommentCard = ({ comment }) => (
  <div className="mb-10">
    <div className="font-semibold mb-2">
      <span className="pr-4">{comment.author}</span>
      <span>{formatDateTime(comment.created_at)}</span>
    </div>
    <div className="mb-2 text-gray-900">{comment.body}</div>
    <CommentFooter comment={comment} />
  </div>
);

export default CommentCard;
