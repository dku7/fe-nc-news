import ArticleFooter from "./ArticleFooter";
import { formatDateTime } from "../utils/utils";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => (
  <div className="h-[424px] w-full md:w-1/2 lg:w-1/3">
    <div className="m-4 h-fit overflow-hidden rounded-md bg-white shadow-md hover:shadow-2xl">
      <Link
        aria-label={`Read more about ${article.title}`}
        to={`/articles/${article.article_id}`}
      >
        <img
          className="h-[200px] w-full object-cover hover:cursor-pointer"
          alt={`User posted image about ${article.topic}`}
          src={article.article_img_url}
        />
      </Link>
      <div className="px-4 py-2">
        <div className="mb-2 min-h-20">
          <Link
            className="hover:text-brand-secondary line-clamp-3 font-semibold tracking-tight hover:underline"
            aria-label={`Read more about ${article.title}`}
            to={`/articles/${article.article_id}`}
          >
            {article.title}
          </Link>
        </div>
        <div>
          <Link
            className="text-brand-secondary mb-2 hover:underline"
            aria-label={`Read more articles on ${article.topic}`}
            to={`/?topic=${article.topic}`}
          >
            {article.topic}
          </Link>
          <div className="mt-5 text-sm">
            <span className="article__author">{article.author}</span>
            <time dateTime={article.created_at}>
              {formatDateTime(article.created_at)}
            </time>
          </div>
        </div>
      </div>
      <ArticleFooter article={article} />
    </div>
  </div>
);

export default ArticleCard;
