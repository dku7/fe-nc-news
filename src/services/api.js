import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://nc-news-voyg.onrender.com",
  timeout: 1000,
});

export const getArticles = () =>
  apiClient
    .get("/api/articles?limit=1000")
    .then((response) => response.data.articles);

export const getArticleById = (article_id) =>
  apiClient
    .get(`/api/articles/${article_id}`)
    .then((response) => response.data.article);

export const getArticleComments = (article_id) =>
  apiClient
    .get(`/api/articles/${article_id}/comments`)
    .then((response) => response.data.comments);

export const patchArticleVotes = (article_id, amount) =>
  apiClient
    .patch(`/api/articles/${article_id}`, { inc_votes: amount })
    .then((response) => response.data.updatedArticle);

export const postNewComment = (article_id, comment, username) =>
  apiClient
    .post(`/api/articles/${article_id}/comments`, {
      body: comment,
      author: username,
    })
    .then((response) => response.data.newComment);

export const deleteComment = (comment_id) =>
  apiClient.delete(`/api/comments/${comment_id}`).then((response) => response);
