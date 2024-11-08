import { useState, useEffect, useContext } from "react";
import { getTopics } from "../services/api";
import { Link } from "react-router-dom";
import { TopicsListContext } from "../contexts/TopicsList";
import { TagIcon } from "@heroicons/react/24/outline";

const TopicSelector = ({ onSelect }) => {
  const { topicsList, setTopicsList } = useContext(TopicsListContext);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getTopics()
      .then((topics) => {
        setTopicsList(topics);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading topics...</p>;
  if (isError) return <p>Could not load topics.</p>;

  return (
    <>
      <div className="flex pb-2">
        <TagIcon className="inline-block h-6 pb-1 pr-4 text-gray-900" />
        <span className="inline-block">Topics</span>
      </div>
      <ul>
        {topicsList.map((topic) => (
          <li key={topic.slug} className="ml-12 pb-1 text-sm capitalize">
            <Link
              className="hover:text-brand-secondary hover:underline"
              onClick={onSelect}
              to={`/?topic=${topic.slug}`}
            >
              {topic.slug}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TopicSelector;
