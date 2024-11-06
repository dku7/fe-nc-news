import {
  QUERY_PARAM_SORT_BY,
  QUERY_PARAM_ORDER_BY,
  QUERY_PARAM_ORDER_BY_ASC,
  QUERY_PARAM_ORDER_BY_DESC,
} from "../utils/constants";
import Selector from "./Selector";
import SortButton from "./SortButton";

const ArticleSorter = ({ sortBy, orderBy, handleSortChange }) => {
  const sortOptions = [
    { caption: "Date", value: "created_at" },
    { caption: "Comments", value: "comment_count" },
    { caption: "Votes", value: "votes" },
  ];

  const onSelectChange = (event) =>
    handleSortChange(QUERY_PARAM_SORT_BY, event.target.value);

  const onOrderChange = (direction) =>
    handleSortChange(QUERY_PARAM_ORDER_BY, direction);

  return (
    <div className="flex">
      <Selector
        label={"Sort by"}
        currentValue={sortBy}
        onSelectChange={onSelectChange}
        options={sortOptions}
      />
      <SortButton
        direction={QUERY_PARAM_ORDER_BY_ASC}
        currentValue={orderBy}
        onOrderChange={onOrderChange}
      />
      <SortButton
        direction={QUERY_PARAM_ORDER_BY_DESC}
        currentValue={orderBy}
        onOrderChange={onOrderChange}
      />
    </div>
  );
};

export default ArticleSorter;
