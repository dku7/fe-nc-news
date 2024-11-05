import { useState, useEffect } from "react";
import { getTopics } from "../services/api";
import { Link } from "react-router-dom";

const TopicSelector = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getTopics()
      .then((topics) => setTopics(topics))
      .catch(() => setIsError(true))
      .finally(setIsLoading(false));
  }, []);

  if (isLoading) return <p>Loading topics...</p>;
  if (isError) return <p>Could not load topics.</p>;

  return (
    <div>
      <p>Topics</p>
      <ul>
        {topics.map((topic) => (
          <li key={topic.slug} className="ml-2 capitalize text-sm">
            <Link to={`/?topic=${topic.slug}`}>{topic.slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicSelector;
