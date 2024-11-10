import {
  QUERY_PARAM_ORDER_BY_ASC,
  QUERY_PARAM_ORDER_BY_DESC,
  QUERY_PARAM_DEFAULT_SORT_BY_VALUE,
  QUERY_PARAM_DEFAULT_ARTICLE_LIMIT,
  QUERY_PARAM_DEFAULT_PAGE,
  QUERY_PARAM_SORT_BY,
  QUERY_PARAM_ORDER_BY,
  QUERY_PARAM_DEFAULT_ORDER_BY_VALUE,
  QUERY_PARAM_LIMIT,
  QUERY_PARAM_PAGE,
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

export const parseQueryParams = (searchParams) => {
  const queryTopic = searchParams.get("topic");
  const querySortBy =
    searchParams.get(QUERY_PARAM_SORT_BY) ?? QUERY_PARAM_DEFAULT_SORT_BY_VALUE;
  const queryOrderBy =
    searchParams.get(QUERY_PARAM_ORDER_BY) ??
    QUERY_PARAM_DEFAULT_ORDER_BY_VALUE;
  const queryLimit =
    searchParams.get(QUERY_PARAM_LIMIT) ?? QUERY_PARAM_DEFAULT_ARTICLE_LIMIT;
  const queryPage =
    searchParams.get(QUERY_PARAM_PAGE) ?? QUERY_PARAM_DEFAULT_PAGE;

  return {
    topic: queryTopic,
    [QUERY_PARAM_SORT_BY]: querySortBy,
    [QUERY_PARAM_ORDER_BY]: queryOrderBy,
    [QUERY_PARAM_LIMIT]: Number(queryLimit),
    [QUERY_PARAM_PAGE]: Number(queryPage),
  };
};

export const addNewSearchParam = (existingParams, param, value) => {
  const newParams = new URLSearchParams(existingParams);
  newParams.set(param, value);

  return newParams;
};
