import {
  FETCH_ARTICLES_INIT,
  FETCH_ARTICLES_SET_HOME_ARTICLES,
  FETCH_ARTICLES_ERROR,
} from "../utils/constants";

export const articlesReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_INIT:
      return { ...state, isLoading: true, error: null };
    case FETCH_ARTICLES_SET_HOME_ARTICLES:
      return {
        ...state,
        data: {
          featured: action.payload[0],
          suggested: action.payload.slice(1, 6),
          trending: action.payload.slice(10, 15),
        },
        isLoading: false,
      };
    case FETCH_ARTICLES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
  }
};
