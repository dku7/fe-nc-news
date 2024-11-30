import { Link } from "react-router-dom";
import { useContext } from "react";
import { TopicsListContext } from "../contexts/TopicsList";

const TopicList = ({ onSelect }) => {
  const { topicsList } = useContext(TopicsListContext);

  return (
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
  );
};

export default TopicList;
