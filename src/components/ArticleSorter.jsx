import { useState } from "react";

const ArticleSorter = ({ handleSortByChange }) => {
  const sortOptions = [
    { caption: "Date", value: "created_at" },
    { caption: "Comments", value: "comment_count" },
    { caption: "Votes", value: "votes" },
  ];

  const [sortBy, setSortBy] = useState("created_at");

  const onSelectChange = (event) => {
    const sortBy = event.target.value;

    setSortBy(sortBy);
    handleSortByChange(sortBy);
  };

  return (
    <div>
      <label htmlFor="sort-by" className="mr-4">
        Sort by:
      </label>
      <select
        className="border rounded px-2"
        value={sortBy}
        onChange={onSelectChange}
        id="sort-by">
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.caption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ArticleSorter;
