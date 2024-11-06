import ArticleFooter from "./ArticleFooter";
import { formatDateTime } from "../utils/utils";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => (
  <div className="m-5 bg-white rounded-md overflow-hidden shadow-md hover:shadow-2xl">
    <Link to={`/articles/${article.article_id}`}>
      <img
        className="h-2/5 w-full object-cover hover:cursor-pointer"
        src={article.article_img_url}
      />
    </Link>
    <div className="p-4">
      <div className="mb-4 min-h-28">
        <Link to={`/articles/${article.article_id}`}>
          <span className="text-base lg:text-lg font-semibold hover:underline hover:text-zinc-800 line-clamp-3 tracking-tight">
            {article.title}
          </span>
        </Link>
      </div>
      <div className="text-gray-800">
        <Link className="mb-2 hover:underline" to={`/?topic=${article.topic}`}>
          {article.topic}
        </Link>
        <div className="mt-5 text-sm">
          <span className="article__author">{article.author}</span>
          <span>{formatDateTime(article.created_at)}</span>
        </div>
      </div>
    </div>
    <ArticleFooter article={article} />
  </div>
);

export default ArticleCard;
