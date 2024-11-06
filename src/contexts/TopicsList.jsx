import { createContext, useState } from "react";

export const TopicsListContext = createContext();

export const TopicsListProvider = ({ children }) => {
  const [topicsList, setTopicsList] = useState([]);

  return (
    <TopicsListContext.Provider value={{ topicsList, setTopicsList }}>
      {children}
    </TopicsListContext.Provider>
  );
};
