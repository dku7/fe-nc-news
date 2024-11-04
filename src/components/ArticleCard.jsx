import ArticleFooter from "./ArticleFooter";
import { formatDateTime } from "../utils/utils";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => (
  <div className="m-5 bg-white rounded overflow-hidden shadow-md ">
    <img src={article.article_img_url} />
    <div className="p-4">
      <Link
        className="text-lg font-semibold hover:underline"
        to={`/articles/${article.article_id}`}>
        {article.title}
      </Link>
      <p className="mb-2">{article.topic}</p>
      <p>{article.author}</p>
      <p>{formatDateTime(article.created_at)}</p>
    </div>
    <ArticleFooter article={article} />
  </div>
);

export default ArticleCard;
