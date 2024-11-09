import { formatDateTime } from "../utils/utils";
import { Link } from "react-router-dom";

const ArticleHeader = ({ article, canClickTitle }) => {
  const getImage = () => {
    const articleImage = (
      <img
        className="w-full rounded-t-md object-cover"
        alt={`User posted image about ${article.topic}`}
        src={article.article_img_url}
      />
    );

    return canClickTitle ? (
      <Link
        aria-label={`Read more about ${article.title}`}
        className="hover:text-brand-secondary hover:underline"
        to={`/articles/${article.article_id}`}
      >
        {articleImage}
      </Link>
    ) : (
      articleImage
    );
  };

  const getTitle = () =>
    canClickTitle ? (
      <Link
        aria-label={`Read more about ${article.title}`}
        className="hover:text-brand-secondary hover:underline"
        to={`/articles/${article.article_id}`}
      >
        {article.title}
      </Link>
    ) : (
      article.title
    );

  return (
    <div>
      {getImage()}
      <header>
        <h2 className="my-4 text-2xl font-bold">{getTitle()}</h2>
      </header>
      <div>
        <Link
          className="text-brand-secondary mb-2 capitalize hover:underline"
          to={`/browse?topic=${article.topic}`}
        >
          {article.topic}
        </Link>
        <p className="article__author">{article.author}</p>
        <p>{formatDateTime(article.created_at)}</p>
      </div>
    </div>
  );
};

export default ArticleHeader;
