import ArticleFooter from "./ArticleFooter";
import { formatDateTime } from "../utils/utils";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 h-[424px] ">
    <div className="m-4 h-fit bg-white rounded-md overflow-hidden shadow-md hover:shadow-2xl">
      <Link to={`/articles/${article.article_id}`}>
        <img
          className="h-[200px] w-full object-cover hover:cursor-pointer"
          src={article.article_img_url}
        />
      </Link>
      <div className="px-4 py-2">
        <div className="mb-2 min-h-20">
          <Link to={`/articles/${article.article_id}`}>
            <span className="font-semibold hover:underline hover:text-zinc-800 line-clamp-3 tracking-tight">
              {article.title}
            </span>
          </Link>
        </div>
        <div className="text-gray-800">
          <Link
            className="mb-2 hover:underline"
            to={`/?topic=${article.topic}`}>
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
  </div>
);

export default ArticleCard;
