import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";
import { QUERY_PARAM_SORT_BY } from "../utils/constants";

const ArticleSorter = ({ sortBy, handleSortChange }) => {
  const sortOptions = [
    { caption: "Date", value: "created_at" },
    { caption: "Comments", value: "comment_count" },
    { caption: "Votes", value: "votes" },
  ];

  const onSortByChange = (event) =>
    handleSortChange(QUERY_PARAM_SORT_BY, event.target.value);

  return (
    <div className="flex">
      <label htmlFor="sort-by" className="mr-2">
        Sort by:
      </label>
      <select
        className="border rounded px-2 mx-2"
        value={sortBy}
        onChange={onSortByChange}
        id="sort-by">
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.caption}
          </option>
        ))}
      </select>
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
