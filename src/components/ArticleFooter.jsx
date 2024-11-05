import VotingBar from "./VotingBar";

const ArticleFooter = ({ article, votingEnabled }) => {
  const displayVotingArea = () =>
    votingEnabled ? (
      <VotingBar votes={article.votes} />
    ) : (
      <span className="ml-4">{article.votes} votes</span>
    );

  return (
    <div className="flex font-light">
      {displayVotingArea()}
      <span className="pl-8">{article.comment_count} comments</span>
    </div>
  );
};

export default ArticleFooter;
