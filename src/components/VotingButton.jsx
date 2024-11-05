import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
import {
  VOTE_DIRECTION_UP,
  VOTE_DIRECTION_DOWN,
  VOTE_STATUS_VOTING_IN_PROGRESS,
  VOTE_STATUS_VOTE_SUCCESSFUL,
} from "../utils/constants";
import ErrorDisplay from "./ErrorDisplay";

const getIcon = (direction) => {
  switch (direction) {
    case VOTE_DIRECTION_UP:
      return <HandThumbUpIcon className="size-6 text-black" />;
    case VOTE_DIRECTION_DOWN:
      return <HandThumbDownIcon className="size-6 text-black" />;
  }
};

const VotingButton = ({ direction, onVoteClick, votingStatus }) => {
  const voteAmount =
    direction === VOTE_DIRECTION_UP
      ? 1
      : direction === VOTE_DIRECTION_DOWN
      ? -1
      : 0;

  return (
    <button
      disabled={[
        VOTE_STATUS_VOTING_IN_PROGRESS,
        VOTE_STATUS_VOTE_SUCCESSFUL,
      ].includes(votingStatus)}
      onClick={() => {
        onVoteClick(voteAmount);
      }}>
      {getIcon(direction)}
    </button>
  );
};

export default VotingButton;
