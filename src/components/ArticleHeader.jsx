import { formatDateTime } from "../utils/utils";

const ArticleHeader = ({ article }) => (
  <div>
    <img className="object-cover w-full" src={article.article_img_url} />

    <header>
      <h2 className="text-2xl font-bold my-4">{article.title}</h2>
    </header>
    <div className="text-gray-800">
      <p className="mb-2">{article.topic}</p>
      <p className="article__author">{article.author}</p>
      <p>{formatDateTime(article.created_at)}</p>
    </div>
  </div>
);

export default ArticleHeader;
