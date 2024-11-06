import VotingBar from "./VotingBar";

const ArticleFooter = ({ article, votingEnabled }) => {
  const displayVotingArea = () =>
    votingEnabled ? (
      <VotingBar article_id={article.article_id} currentVotes={article.votes} />
    ) : (
      <span className="ml-4">{article.votes} votes</span>
    );

  return (
    <div className="font-light flex align-baseline">
      <span className="inline-block">{displayVotingArea()}</span>
      <span className="pl-8 my-auto">{article.comment_count} comments</span>
    </div>
  );
};

export default ArticleFooter;
