import { formatDateTime } from "../utils/utils";

const ArticleHeader = ({ article }) => (
  <>
    <img src={article.article_img_url} />

    <header>
      <h2 className="text-2xl font-bold">{article.title}</h2>
    </header>

    <p>{article.topic}</p>
    <p>{article.author}</p>
    <p>{formatDateTime(article.created_at)}</p>
  </>
);

export default ArticleHeader;
