import {
  HandThumbUpIcon as ThumbUpNotVotedIcon,
  HandThumbDownIcon as ThumbDownNotVotedIcon,
} from "@heroicons/react/24/outline";

import {
  HandThumbUpIcon as ThumbUpVotedIcon,
  HandThumbDownIcon as ThumbDownVotedIcon,
} from "@heroicons/react/24/solid";

import {
  VOTE_DIRECTION_UP,
  VOTE_DIRECTION_DOWN,
  VOTE_STATUS_VOTING_IN_PROGRESS,
} from "../utils/constants";

const VotingButton = ({
  direction,
  onVoteClick,
  votingStatus,
  lastVoteDirection,
}) => {
  let voteAmount = 0;
  let buttonTitle = "";

  const getIcon = () => {
    switch (true) {
      case direction === VOTE_DIRECTION_UP &&
        lastVoteDirection !== VOTE_DIRECTION_UP:
        return (
          <ThumbUpNotVotedIcon className="hover:text-brand-tertiary size-6 text-black" />
        );
      case direction === VOTE_DIRECTION_UP &&
        lastVoteDirection === VOTE_DIRECTION_UP:
        return <ThumbUpVotedIcon className="text-brand-primary size-6" />;
      case direction === VOTE_DIRECTION_DOWN &&
        lastVoteDirection !== VOTE_DIRECTION_DOWN:
        return (
          <ThumbDownNotVotedIcon className="hover:text-brand-tertiary size-6 text-black" />
        );
      case direction === VOTE_DIRECTION_DOWN &&
        lastVoteDirection === VOTE_DIRECTION_DOWN:
        return <ThumbDownVotedIcon className="text-brand-primary size-6" />;
    }
  };

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

  const isButtonDisabled =
    direction === lastVoteDirection ||
    votingStatus === VOTE_STATUS_VOTING_IN_PROGRESS;

  return (
    <button
      disabled={isButtonDisabled}
      title={buttonTitle}
      onClick={() => {
        onVoteClick(voteAmount);
      }}
    >
      {getIcon()}
    </button>
  );
};

export default VotingButton;
