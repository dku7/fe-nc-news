import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";
import { QUERY_PARAM_SORT_BY } from "../utils/constants";
import Selector from "./Selector";

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
      <button title="Ascending">
        <ArrowUpIcon className="size-6 text-black border border-gray-400 rounded" />
      </button>
      <button title="Descending">
        <ArrowDownIcon className="size-6 text-black" />
      </button>
    </div>
  );
};

export default ArticleSorter;
