import { Link } from "react-router-dom";

const TopicItem = ({ topic, onSelect }) => (
  <li key={topic.slug} className="ml-12 pb-1 text-base capitalize">
    <Link
      className="hover:text-brand-secondary hover:underline"
      onClick={onSelect}
      to={`/browse?topic=${topic.slug}`}
    >
      {topic.slug}
    </Link>
  </li>
);

export default TopicItem;
