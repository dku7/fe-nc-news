import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";
import {
  QUERY_PARAM_ORDER_BY_ASC,
  QUERY_PARAM_ORDER_BY_DESC,
} from "../utils/constants";

const SortButton = ({ direction, currentValue, tooltip, onOrderChange }) => {
  const cssClassName =
    direction === currentValue
      ? "sort-button__icon--selected"
      : "sort-button__icon--unselected";

  let svgComponent = <></>;

  switch (direction) {
    case QUERY_PARAM_ORDER_BY_ASC:
      svgComponent = <ArrowUpIcon className={cssClassName} />;
      break;
    case QUERY_PARAM_ORDER_BY_DESC:
      svgComponent = <ArrowDownIcon className={cssClassName} />;
      break;
  }

  return (
    <button title={tooltip} onClick={() => onOrderChange(direction)}>
      {svgComponent}
    </button>
  );
};

export default SortButton;
