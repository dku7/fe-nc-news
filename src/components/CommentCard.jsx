import { formatDateTime } from "../utils/utils";
import CommentFooter from "./CommentFooter";

const CommentCard = ({ comment, updateCommentsList }) => (
  <div className="mb-10">
    <div className=" mb-2">
      <span className="pr-4 font-semibold">{comment.author}</span>
      <span>{formatDateTime(comment.created_at)}</span>
    </div>
    <div className="mb-2 text-gray-900">{comment.body}</div>
    <CommentFooter comment={comment} updateCommentsList={updateCommentsList} />
  </div>
);

export default CommentCard;
