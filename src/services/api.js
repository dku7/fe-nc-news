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
