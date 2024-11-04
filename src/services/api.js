import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://nc-news-voyg.onrender.com",
  timeout: 1000,
});

export const getArticles = () =>
  apiClient
    .get("/api/articles?limit=1000")
    .then((response) => response.data.articles);
