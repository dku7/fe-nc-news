import { formatDateTime } from "../utils/utils";
import { Link } from "react-router-dom";

const ArticleHeader = ({ article }) => (
  <div>
    <img
      className="object-cover w-full rounded-t-md"
      alt={`User posted image about ${article.topic}`}
      src={article.article_img_url}
    />

    <header>
      <h2 className="text-2xl font-bold my-4">{article.title}</h2>
    </header>
    <div className="text-gray-800">
      <Link className="mb-2 hover:underline" to={`/?topic=${article.topic}`}>
        {article.topic}
      </Link>
      <p className="article__author">{article.author}</p>
      <p>{formatDateTime(article.created_at)}</p>
    </div>
  </div>
);

export default ArticleHeader;
