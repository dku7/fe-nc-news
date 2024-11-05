import VotingButton from "./VotingButton";
import { VOTE_DIRECTION_UP, VOTE_DIRECTION_DOWN } from "../utils/constants";

const VotingBar = ({ votes }) => {
  return (
    <div className="flex">
      <VotingButton direction={VOTE_DIRECTION_UP} />
      <span className="px-4">{votes}</span>
      <VotingButton direction={VOTE_DIRECTION_DOWN} />
    </div>
  );
};

export default VotingBar;
