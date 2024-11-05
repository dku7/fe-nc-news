import { useEffect, useState } from "react";
import { getArticleComments } from "../services/api";
import CommentCard from "./CommentCard";
import LoadingDisplay from "./LoadingDisplay";
import ErrorDisplay from "./ErrorDisplay";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getArticleComments(article_id)
      .then((comments) => setComments(comments))
      .catch(() => setIsError(true))
      .finally(setIsLoading(false));
  }, []);

  return (
    <section className="mt-10">
      <header className="mb-10">
        <h2 className="text-xl font-bold">Comments</h2>
      </header>

      {isLoading && <LoadingDisplay />}
      {isError && <ErrorDisplay />}

      <div>
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </div>
    </section>
  );
};

export default CommentsList;
