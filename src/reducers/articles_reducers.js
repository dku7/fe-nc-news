import {
  FETCH_ARTICLES_INIT,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_SET_HOME_ARTICLES,
  FETCH_BROWSE_ARTICLES_INIT,
  FETCH_ARTICLES_SET_BROWSE_RESULTS,
  FETCH_ARTICLES_BROWSE_PARAMS_UPDATE,
  QUERY_PARAM_LIMIT,
} from "../utils/constants";

export const articlesReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_INIT:
      return { ...state, isLoading: true, error: null };

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

    case FETCH_ARTICLES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
  }
};
