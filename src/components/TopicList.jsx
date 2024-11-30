import { useContext } from "react";
import { TopicsListContext } from "../contexts/TopicsList";
import TopicItem from "./TopicItem";

const TopicList = ({ onSelect }) => {
  const { topicsList } = useContext(TopicsListContext);

  return (
    <ul>
      {topicsList
        ? topicsList.map((topic) => (
            <TopicItem key={topic.slug} topic={topic} onSelect={onSelect} />
          ))
        : "Could not get list of topics"}
    </ul>
  );
};

export default TopicList;
