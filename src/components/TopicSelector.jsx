import { useState, useEffect, useContext } from "react";
import { getTopics } from "../services/api";
import { Link } from "react-router-dom";
import { TopicsListContext } from "../contexts/TopicsList";
import { TagIcon } from "@heroicons/react/24/outline";

const TopicSelector = () => {
  const { topicsList, setTopicsList } = useContext(TopicsListContext);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getTopics()
      .then((topics) => setTopicsList(topics))
      .catch(() => setIsError(true))
      .finally(setIsLoading(false));
  }, []);

  if (isLoading) return <p>Loading topics...</p>;
  if (isError) return <p>Could not load topics.</p>;

  return (
    <div>
      <div className="flex pb-2">
        <TagIcon className="text-gray-900 h-6 inline-block pb-1 pr-4" />
        <span className="inline-block">Topics</span>
      </div>
      <ul>
        {topicsList.map((topic) => (
          <li key={topic.slug} className="ml-12 capitalize text-sm pb-1">
            <Link className="hover:underline" to={`/?topic=${topic.slug}`}>
              {topic.slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicSelector;
