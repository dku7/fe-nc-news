import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
import { VOTE_DIRECTION_UP, VOTE_DIRECTION_DOWN } from "../utils/constants";

const getIcon = (direction) => {
  switch (direction) {
    case VOTE_DIRECTION_UP:
      return <HandThumbUpIcon className="size-6 text-black" />;
    case VOTE_DIRECTION_DOWN:
      return <HandThumbDownIcon className="size-6 text-black" />;
  }
};

const VotingButton = ({ direction }) => {
  return <button>{getIcon(direction)}</button>;
};

export default VotingButton;
