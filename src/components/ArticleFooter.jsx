import VotingBar from "./VotingBar";

const ArticleFooter = ({ article, votingEnabled }) => {
  if (votingEnabled) return <VotingBar />;
  else
    return (
      <div className="m-4 font-light">
        <span className="pr-8">{article.votes} votes</span>
        <span>{article.comment_count} comments</span>
      </div>
    );
};

export default ArticleFooter;
