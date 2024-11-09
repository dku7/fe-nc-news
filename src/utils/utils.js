import {
  QUERY_PARAM_ORDER_BY_ASC,
  QUERY_PARAM_ORDER_BY_DESC,
} from "./constants";

export const formatDateTime = (date) => {
  let dateStr = "";

  if (date) {
    const newDate = new Date(date);
    dateStr = newDate.toLocaleDateString();
  }

  return dateStr;
};

const getRandomElement = (array) => array.sort(() => Math.random() - 0.5)[0];

export const getRandomSortBy = () =>
  getRandomElement([
    "author",
    "title",
    "article_id",
    "topic",
    "created_at",
    "votes",
    "comment_count",
  ]);

export const getRandomOrder = () =>
  getRandomElement([QUERY_PARAM_ORDER_BY_ASC, QUERY_PARAM_ORDER_BY_DESC]);
