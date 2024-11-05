import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { QUERY_PARAM_SORT_BY, QUERY_PARAM_ORDER } from "../utils/constants";

const ArticleSorter = ({ handleSortChange }) => {
  const sortOptions = [
    { caption: "Date", value: "created_at" },
    { caption: "Comments", value: "comment_count" },
    { caption: "Votes", value: "votes" },
  ];

  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrderBy] = useState("desc");

  const onSortByChange = (event) => {
    const sortBy = event.target.value;

    setSortBy(sortBy);
    handleSortChange(QUERY_PARAM_SORT_BY, sortBy);
  };

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
