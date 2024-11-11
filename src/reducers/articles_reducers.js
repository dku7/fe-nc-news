export const FETCH_ARTICLES_INIT = "FETCH_ARTICLES_INIT";
export const FETCH_ARTICLES_SET_SINGLE_ARTICLE =
  "FETCH_ARTICLES_SET_SINGLE_ARTICLE";
export const FETCH_ARTICLES_SET_HOME_ARTICLES = "SET_HOME_ARTICLES";
export const FETCH_ARTICLES_SET_BROWSE_RESULTS = "SET_BROWSE_ARTICLES";
export const FETCH_BROWSE_ARTICLES_INIT = "FETCH_BROWSE_ARTICLES_INIT";
export const FETCH_ARTICLES_BROWSE_PARAMS_UPDATE =
  "FETCH_ARTICLES_BROWSE_PARAMS_UPDATE";
export const FETCH_ARTICLES_NOT_FOUND = "FETCH_ARTICLES_SET_NOT_FOUND";
export const FETCH_ARTICLES_ERROR = "FETCH_ARTICLES_ERROR";

import { QUERY_PARAM_LIMIT } from "../utils/constants";

export const articlesReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_INIT:
      return { ...state, isLoading: true, error: null };

    case FETCH_ARTICLES_SET_SINGLE_ARTICLE:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload.article,
      };

    case FETCH_ARTICLES_SET_HOME_ARTICLES:
      return {
        ...state,
        data: {
          featured: action.payload.articles[0],
          suggested: action.payload.articles.slice(1, 6),
          trending: action.payload.articles.slice(10, 15),
        },
        isLoading: false,
      };

    case FETCH_BROWSE_ARTICLES_INIT:
      return {
        ...state,
        searchParams: action.payload.searchParams,
        topic: action.payload.topic,
        isLoading: true,
        error: false,
      };

    case FETCH_ARTICLES_SET_BROWSE_RESULTS:
      return {
        ...state,
        data: action.payload,
        isLastPage:
          action.payload.length < state.searchParams[QUERY_PARAM_LIMIT],
        isLoading: false,
      };

    case FETCH_ARTICLES_BROWSE_PARAMS_UPDATE:
      return {
        ...state,
        [action.payload.param]: action.payload.value,
      };

    case FETCH_ARTICLES_NOT_FOUND:
      return { ...state, notFound: true, isLoading: false, error: null };

    case FETCH_ARTICLES_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error();
  }
};
