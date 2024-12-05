import axios from "axios";
import axiosRetry from "axios-retry";

const apiClient = axios.create({
  baseURL: "https://nc-news-voyg.onrender.com",
  timeout: 30000,
});

axiosRetry(apiClient, {
  retries: 3,
  retryDelay: () => 100,
  shouldResetTimeout: true,
  retryCondition: (error) => {
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      error.code === "ECONNABORTED"
    );
  },
});

export const getArticles = (queryParams) =>
  apiClient
    .get("/api/articles", { params: { ...queryParams } })
    .then((response) => response.data.articles);

export const getArticleById = (article_id) =>
  apiClient
    .get(`/api/articles/${article_id}`)
    .then((response) => response.data.article);

export const getArticleComments = (article_id, limit, page) =>
  apiClient
    .get(`/api/articles/${article_id}/comments?limit=${limit}&p=${page}`)
    .then((response) => response.data.comments);

export const patchArticleVotes = (article_id, amount) =>
  apiClient
    .patch(`/api/articles/${article_id}`, { inc_votes: amount })
    .then((response) => response.data.updatedArticle);

export const patchCommentVotes = (comment_id, amount) =>
  apiClient
    .patch(`/api/comments/${comment_id}`, { inc_votes: amount })
    .then((response) => response.data.updatedComment);

export const postNewComment = (article_id, comment, username) =>
  apiClient
    .post(`/api/articles/${article_id}/comments`, {
      body: comment,
      author: username,
    })
    .then((response) => response.data.newComment);

export const deleteComment = (comment_id) =>
  apiClient.delete(`/api/comments/${comment_id}`).then((response) => response);

export const getTopics = () =>
  apiClient.get("/api/topics").then((response) => response.data.topics);
