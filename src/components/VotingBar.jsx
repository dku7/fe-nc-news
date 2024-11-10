import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import VotingButton from "./VotingButton";
import {
  VOTE_DIRECTION_UP,
  VOTE_DIRECTION_DOWN,
  VOTE_STATUS_VOTING_IN_PROGRESS,
  VOTE_STATUS_VOTE_SUCCESSFUL,
  VOTE_STATUS_VOTE_UNSUCCESSFUL,
  VOTE_STATUS_NOT_LOGGED_IN,
  VOTE_TYPE_ARTICLE,
  VOTE_TYPE_COMMENT,
} from "../utils/constants";
import { patchArticleVotes, patchCommentVotes } from "../services/api";
import { LoggedInUserContext } from "../contexts/LoggedInUser";

const VotingBar = ({ recordType, recordId, currentVotes }) => {
  const { loggedInUser } = useContext(LoggedInUserContext);
  const [votes, setVotes] = useState(currentVotes);
  const [votingStatus, setVotingStatus] = useState("");
  const [lastVoteDirection, setLastVoteDirection] = useState("");

  useEffect(() => {
    setVotes(currentVotes);
    setVotingStatus("");
  }, [currentVotes, loggedInUser]);

  const handleVoting = (amount) => {
    if (!loggedInUser) {
      setVotingStatus(VOTE_STATUS_NOT_LOGGED_IN);
    } else {
      setVotingStatus(VOTE_STATUS_VOTING_IN_PROGRESS);
      setVotes((cur) => cur + amount);

      let patchFunction;
      switch (recordType) {
        case VOTE_TYPE_ARTICLE:
          patchFunction = patchArticleVotes(recordId, amount);
          break;
        case VOTE_TYPE_COMMENT:
          patchFunction = patchCommentVotes(recordId, amount);
          break;
      }

      patchFunction
        .then(() => {
          setVotingStatus(VOTE_STATUS_VOTE_SUCCESSFUL);
          setLastVoteDirection(
            amount < 1 ? VOTE_DIRECTION_DOWN : VOTE_DIRECTION_UP,
          );
        })
        .catch(() => {
          setVotingStatus(VOTE_STATUS_VOTE_UNSUCCESSFUL);
          setLastVoteDirection("");
          setVotes((cur) => cur - amount);
        });
    }
  };

  return (
    <>
      <div className="mt-2 flex items-center">
        <VotingButton
          direction={VOTE_DIRECTION_UP}
          onVoteClick={handleVoting}
          votingStatus={votingStatus}
          lastVoteDirection={lastVoteDirection}
        />
        <span className="px-4">{votes}</span>
        <VotingButton
          direction={VOTE_DIRECTION_DOWN}
          onVoteClick={handleVoting}
          votingStatus={votingStatus}
          lastVoteDirection={lastVoteDirection}
        />
      </div>
      {votingStatus === VOTE_STATUS_NOT_LOGGED_IN ? (
        <p className="mt-2">
          Please{" "}
          <Link
            to="/login"
            className="hover:text-brand-secondary font-semibold hover:underline"
          >
            log in
          </Link>{" "}
          to vote.
        </p>
      ) : (
        votingStatus
      )}
    </>
  );
};

export default VotingBar;
