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
    {
      caption: "Article date",
      value: "created_at",
      ascTooltip: "Oldest to newest",
      descTooltip: "Newest to oldest",
    },
    {
      caption: "Number of comments",
      value: "comment_count",
      ascTooltip: "Lowest to highest",
      descTooltip: "Highest to lowest",
    },
    {
      caption: "Number of votes",
      value: "votes",
      ascTooltip: "Lowest to highest",
      descTooltip: "Highest to lowest",
    },
  ];

  const onSelectChange = (event) =>
    handleSortChange(QUERY_PARAM_SORT_BY, event.target.value);

  const onOrderChange = (direction) =>
    handleSortChange(QUERY_PARAM_ORDER_BY, direction);

  const currentSortOption = sortOptions.filter(
    (option) => option.value === sortBy,
  )[0];

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
        tooltip={currentSortOption.ascTooltip}
        onOrderChange={onOrderChange}
      />
      <SortButton
        direction={QUERY_PARAM_ORDER_BY_DESC}
        currentValue={orderBy}
        tooltip={currentSortOption.descTooltip}
        onOrderChange={onOrderChange}
      />
    </div>
  );
};

export default ArticleSorter;
