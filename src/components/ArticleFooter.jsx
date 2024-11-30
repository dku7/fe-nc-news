import { useContext } from "react";
import { VOTE_TYPE_ARTICLE } from "../utils/constants";
import VotingBar from "./VotingBar";
import { LoggedInUserContext } from "../contexts/LoggedInUser";

const ArticleFooter = ({ article, votingEnabled }) => {
  const { loggedInUser } = useContext(LoggedInUserContext);

  const votingArea =
    votingEnabled && loggedInUser?.username !== article.author ? (
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
      <span className="inline-block">{votingArea}</span>
      <span className="my-auto pl-8">{article.comment_count} comments</span>
    </div>
  );
};

export default ArticleFooter;
