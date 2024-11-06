import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";
import { ORDER_BY_ASC, ORDER_BY_DESC } from "../utils/constants";

const getIcon = (direction) => {
  switch (direction) {
    case ORDER_BY_ASC:
      return <ArrowUpIcon className="size-6 text-black" />;
    case ORDER_BY_DESC:
      return <ArrowDownIcon className="size-6 text-black" />;
  }
};

const SortButton = ({ direction }) => (
  <button title="Ascending">{getIcon(direction)}</button>
);

export default SortButton;
