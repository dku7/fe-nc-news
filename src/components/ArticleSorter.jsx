import {
  QUERY_PARAM_SORT_BY,
  ORDER_BY_ASC,
  ORDER_BY_DESC,
} from "../utils/constants";
import Selector from "./Selector";
import SortButton from "./SortButton";

const ArticleSorter = ({ sortBy, handleSortChange }) => {
  const sortOptions = [
    { caption: "Date", value: "created_at" },
    { caption: "Comments", value: "comment_count" },
    { caption: "Votes", value: "votes" },
  ];

  const onSelectChange = (event) =>
    handleSortChange(QUERY_PARAM_SORT_BY, event.target.value);

  return (
    <div className="flex">
      <Selector
        label={"Sort by"}
        initialValue={sortBy}
        onSelectChange={onSelectChange}
        options={sortOptions}
      />
      <SortButton direction={ORDER_BY_ASC} />
      <SortButton direction={ORDER_BY_DESC} />
    </div>
  );
};

export default ArticleSorter;
