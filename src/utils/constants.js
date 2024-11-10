// fetching articles
export const FETCH_ARTICLES_INIT = "FETCH_ARTICLES_INIT";
export const FETCH_ARTICLES_SET_HOME_ARTICLES = "SET_HOME_ARTICLES";
export const FETCH_ARTICLES_SET_BROWSE_RESULTS = "SET_BROWSE_ARTICLES";
export const FETCH_BROWSE_ARTICLES_INIT = "FETCH_BROWSE_ARTICLES_INIT";
export const FETCH_ARTICLES_BROWSE_PARAMS_UPDATE =
  "FETCH_ARTICLES_BROWSE_PARAMS_UPDATE";
export const FETCH_ARTICLES_ERROR = "FETCH_ARTICLES_ERROR";

// fetching comments
export const FETCH_COMMENTS_INIT = "FETCH_COMMENTS_INIT";
export const FETCH_COMMENTS_SET_COMMENTS = "FETCH_COMMENTS_SET_COMMENTS";
export const FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR";

// comment and article voting
export const VOTE_DIRECTION_UP = "up";
export const VOTE_DIRECTION_DOWN = "down";
export const VOTE_STATUS_VOTING_IN_PROGRESS = "Submitting your vote...";
export const VOTE_STATUS_VOTE_SUCCESSFUL = "Thank you for voting.";
export const VOTE_STATUS_VOTE_UNSUCCESSFUL =
  "Sorry, your vote could not submitted. Please try again.";
export const VOTE_STATUS_NOT_LOGGED_IN = "Not logged in.";
export const VOTE_TYPE_ARTICLE = "article";
export const VOTE_TYPE_COMMENT = "comment";

// posting comments
export const COMMENT_DISPATCH_ADD_NEW_COMMENT = "COMMENT_DISPATCH_NEW_COMMENT";
export const COMMENT_STATUS_POST_IN_PROGRESS = "Adding your comment...";
export const COMMENT_STATUS_POST_SUCCESSFUL =
  "Thank you for leaving your comment.";
export const COMMENT_STATUS_POST_UNSUCCESSFUL =
  "Sorry, your comment could not added. Please try again.";

// deleting comments
export const COMMENT_DISPATCH_DELETE_COMMENT =
  "COMMENT_DISPATCH_DELETE_COMMENT";
export const COMMENT_STATUS_DELETE_IN_PROGRESS = "Deleting...";
export const COMMENT_STATUS_DELETE_SUCCESSFUL =
  "Your comment has been deleted.";
export const COMMENT_STATUS_DELETE_UNSUCCESSFUL =
  "Sorry, your comment could not be deleted. Please try again.";

// query param sorting options
export const QUERY_PARAM_SORT_BY = "sort_by";
export const QUERY_PARAM_DEFAULT_SORT_BY_VALUE = "created_at";

export const QUERY_PARAM_ORDER_BY = "order";
export const QUERY_PARAM_ORDER_BY_ASC = "asc";
export const QUERY_PARAM_ORDER_BY_DESC = "desc";
export const QUERY_PARAM_DEFAULT_ORDER_BY_VALUE = QUERY_PARAM_ORDER_BY_DESC;

export const QUERY_PARAM_LIMIT = "limit";
export const QUERY_PARAM_PAGE = "p";
export const QUERY_PARAM_DEFAULT_PAGE = 1;

export const QUERY_PARAM_DEFAULT_ARTICLE_LIMIT = 10;
export const QUERY_PARAM_DEFAULT_COMMENT_LIMIT = 5;
