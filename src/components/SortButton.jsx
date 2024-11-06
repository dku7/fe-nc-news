import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";
import {
  QUERY_PARAM_ORDER_BY_ASC,
  QUERY_PARAM_ORDER_BY_DESC,
} from "../utils/constants";

const getIcon = (direction, currentValue) => {
  const cssClassName =
    direction === currentValue
      ? "sort-button__icon--selected"
      : "sort-button__icon--unselected";

  switch (direction) {
    case QUERY_PARAM_ORDER_BY_ASC:
      return <ArrowUpIcon className={cssClassName} />;
    case QUERY_PARAM_ORDER_BY_DESC:
      return <ArrowDownIcon className={cssClassName} />;
  }
};

const SortButton = ({ direction, currentValue, onOrderChange }) => (
  <button onClick={() => onOrderChange(direction)}>
    {getIcon(direction, currentValue)}
  </button>
);

export default SortButton;
