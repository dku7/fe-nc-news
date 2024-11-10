import { useContext } from "react";
import { Link } from "react-router-dom";
import { TopicsListContext } from "../contexts/TopicsList";
import { TagIcon } from "@heroicons/react/24/outline";

const TopicSelector = ({ onSelect }) => {
  const { topicsList } = useContext(TopicsListContext);

  return (
    <>
      <div className="flex pb-2">
        <Link
          className="text-nowrap text-lg hover:text-brand-secondary hover:underline"
          onClick={onSelect}
          to="/browse"
        >
          <TagIcon className="inline-block h-6 pb-1 pr-4 text-gray-900" />
          All topics
        </Link>
      </div>
      <ul>
        {topicsList
          ? topicsList.map((topic) => (
              <li key={topic.slug} className="ml-12 pb-1 text-base capitalize">
                <Link
                  className="hover:text-brand-secondary hover:underline"
                  onClick={onSelect}
                  to={`/browse?topic=${topic.slug}`}
                >
                  {topic.slug}
                </Link>
              </li>
            ))
          : "Could not get list of topics"}
      </ul>
    </>
  );
};

export default TopicSelector;
