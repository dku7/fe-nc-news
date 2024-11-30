export const FETCH_COMMENTS_INIT = "FETCH_COMMENTS_INIT";
export const FETCH_COMMENTS_SET_COMMENTS = "FETCH_COMMENTS_SET_COMMENTS";
export const FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR";
export const COMMENT_DISPATCH_ADD_NEW_COMMENT = "COMMENT_DISPATCH_NEW_COMMENT";
export const COMMENT_DISPATCH_SET_NEW_COMMENT =
  "COMMENT_DISPATCH_SET_NEW_COMMENT";
export const COMMENT_DISPATCH_DELETE_COMMENT =
  "COMMENT_DISPATCH_DELETE_COMMENT";

import { QUERY_PARAM_DEFAULT_COMMENT_LIMIT } from "../utils/constants";

export const commentsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_INIT:
      return {
        ...state,
        data: [],
        isLoading: true,
        error: null,
      };

    case FETCH_COMMENTS_SET_COMMENTS:
      return {
        ...state,
        data: action.payload.comments,
        page: action.payload.page,
        isLastPage:
          action.payload.comments.length < QUERY_PARAM_DEFAULT_COMMENT_LIMIT,
        isLoading: false,
      };

    case COMMENT_DISPATCH_ADD_NEW_COMMENT:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };

    case COMMENT_DISPATCH_SET_NEW_COMMENT:
      console.log("dispatch, setting new comment");
      return {
        ...state,
        data: [action.payload],
        isPostingEnabled: [action.payload ? true : false],
      };

    case COMMENT_DISPATCH_SUBMIT_NEW_COMMENT:
      console.log("dispatch, submitting");
      return {
        ...state,
      };

    case COMMENT_DISPATCH_DELETE_COMMENT:
      const filteredComments = state.data.filter(
        (comment) => comment.comment_id !== action.payload,
      );
      return { ...state, data: filteredComments };

    case FETCH_COMMENTS_ERROR:
      return { ...state, error: action.payload };
    default:
      throw new Error();
  }
};
