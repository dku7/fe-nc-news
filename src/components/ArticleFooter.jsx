import { VOTE_TYPE_ARTICLE } from "../utils/constants";
import VotingBar from "./VotingBar";

const ArticleFooter = ({ article, votingEnabled }) => {
  const displayVotingArea = () =>
    votingEnabled ? (
      <VotingBar
        recordType={VOTE_TYPE_ARTICLE}
        recordId={article.article_id}
        currentVotes={article.votes}
      />
    ) : (
      <span className="ml-4">{article.votes} votes</span>
    );

  return (
    <div className="mb-4 flex align-baseline font-light sm:text-sm">
      <span className="inline-block">{displayVotingArea()}</span>
      <span className="my-auto pl-8">{article.comment_count} comments</span>
    </div>
  );
};

export default ArticleFooter;
