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

const getIcon = (direction) => {
  switch (direction) {
    case VOTE_DIRECTION_UP:
      return <HandThumbUpIcon className="size-6 text-black" />;
    case VOTE_DIRECTION_DOWN:
      return <HandThumbDownIcon className="size-6 text-black" />;
  }
};

const VotingButton = ({ direction, onVoteClick, votingStatus }) => {
  let voteAmount = 0;
  let buttonTitle = "";

  switch (direction) {
    case VOTE_DIRECTION_UP:
      voteAmount = 1;
      buttonTitle = "Vote up";
      break;
    case VOTE_DIRECTION_DOWN:
      voteAmount = -1;
      buttonTitle = "Vote down";
      break;
  }

  return (
    <button
      disabled={[
        VOTE_STATUS_VOTING_IN_PROGRESS,
        VOTE_STATUS_VOTE_SUCCESSFUL,
      ].includes(votingStatus)}
      title={buttonTitle}
      onClick={() => {
        onVoteClick(voteAmount);
      }}>
      {getIcon(direction)}
    </button>
  );
};

export default VotingButton;
