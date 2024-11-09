import { formatDateTime } from "../utils/utils";
import { Link } from "react-router-dom";

const ArticleHeader = ({ article, canClickTitle }) => (
  <div>
    <img
      className="w-full rounded-t-md object-cover"
      alt={`User posted image about ${article.topic}`}
      src={article.article_img_url}
    />

    <header>
      <h2 className="my-4 text-2xl font-bold">
        {canClickTitle ? (
          <Link
            className="hover:text-brand-secondary hover:underline"
            to={`/articles/${article.article_id}`}
          >
            {article.title}
          </Link>
        ) : (
          article.title
        )}
      </h2>
    </header>
    <div>
      <Link
        className="text-brand-secondary mb-2 hover:underline"
        to={`/?topic=${article.topic}`}
      >
        {article.topic}
      </Link>
      <p className="article__author">{article.author}</p>
      <p>{formatDateTime(article.created_at)}</p>
    </div>
  </div>
);

export default ArticleHeader;
