import { useEffect, useState } from "react";
import VotingButton from "./VotingButton";
import {
  VOTE_DIRECTION_UP,
  VOTE_DIRECTION_DOWN,
  VOTE_STATUS_VOTING_IN_PROGRESS,
  VOTE_STATUS_VOTE_SUCCESSFUL,
  VOTE_STATUS_VOTE_UNSUCCESSFUL,
} from "../utils/constants";
import { patchArticleVotes } from "../services/api";

const VotingBar = ({ article_id, currentVotes }) => {
  const [votes, setVotes] = useState(currentVotes);
  const [votingStatus, setVotingStatus] = useState("");

  useEffect(() => setVotes(currentVotes), [currentVotes]);

  const handleVoting = (amount) => {
    setVotingStatus(VOTE_STATUS_VOTING_IN_PROGRESS);
    setVotes((cur) => cur + amount);

    patchArticleVotes(article_id, amount)
      .then(() => setVotingStatus(VOTE_STATUS_VOTE_SUCCESSFUL))
      .catch(() => {
        setVotingStatus(VOTE_STATUS_VOTE_UNSUCCESSFUL);
        setVotes((cur) => cur - amount);
      });
  };

  return (
    <>
      <div className="flex items-center mt-2">
        <VotingButton
          direction={VOTE_DIRECTION_UP}
          onVoteClick={handleVoting}
          votingStatus={votingStatus}
        />
        <span className="px-4">{votes}</span>
        <VotingButton
          direction={VOTE_DIRECTION_DOWN}
          onVoteClick={handleVoting}
          votingStatus={votingStatus}
        />
      </div>
      <p className="mt-2">{votingStatus}</p>
    </>
  );
};

export default VotingBar;
