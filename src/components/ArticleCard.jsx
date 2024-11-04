import ArticleFooter from "./ArticleFooter";
import { formatDateTime } from "../utils/utils";

const ArticleCard = ({ article }) => (
  <div className="m-5 bg-white rounded overflow-hidden shadow-md ">
    <img src={article.article_img_url} />
    <div className="p-4">
      <p className="text-lg font-semibold">{article.title}</p>
      <p className="mb-2">{article.topic}</p>
      <p>{article.author}</p>
      <p>{formatDateTime(article.created_at)}</p>
    </div>
    <ArticleFooter article={article} />
  </div>
);

export default ArticleCard;
