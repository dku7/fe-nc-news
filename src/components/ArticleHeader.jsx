import { formatDateTime } from "../utils/utils";
import { Link } from "react-router-dom";

const ArticleHeader = ({ article }) => (
  <div>
    <img
      className="w-full rounded-t-md object-cover"
      alt={`User posted image about ${article.topic}`}
      src={article.article_img_url}
    />

    <header>
      <h2 className="my-4 text-2xl font-bold">{article.title}</h2>
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
