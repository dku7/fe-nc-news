import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";
import {
  QUERY_PARAM_ORDER_BY_ASC,
  QUERY_PARAM_ORDER_BY_DESC,
} from "../utils/constants";

const getIcon = (direction) => {
  switch (direction) {
    case QUERY_PARAM_ORDER_BY_ASC:
      return <ArrowUpIcon className="size-6 text-black" />;
    case QUERY_PARAM_ORDER_BY_DESC:
      return <ArrowDownIcon className="size-6 text-black" />;
  }
};

const SortButton = ({ direction }) => (
  <button title="Ascending">{getIcon(direction)}</button>
);

export default SortButton;
