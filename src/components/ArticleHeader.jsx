import { useMemo } from "react";
import { formatDateTime } from "../utils/utils";
import { Link } from "react-router-dom";

const ArticleHeader = ({ article, canClickTitle }) => {
  const imgElement = useMemo(
    () => (
      <img
        className="w-full rounded-t-md object-cover"
        alt={`User posted image about ${article.topic}`}
        src={article.article_img_url}
      />
    ),
    [article],
  );

  const articleImage = useMemo(() => {
    return canClickTitle ? (
      <Link
        aria-label={`Read more about ${article.title}`}
        to={`/articles/${article.article_id}`}
      >
        {imgElement}
      </Link>
    ) : (
      imgElement
    );
  }, [article, canClickTitle, imgElement]);

  const articleTitle = useMemo(() => {
    return canClickTitle ? (
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
  }, [article, canClickTitle]);

  return (
    <>
      {articleImage}
      <header>
        <h2 className="my-4 text-2xl font-bold">{articleTitle}</h2>
      </header>
      <div>
        <Link
          className="mb-2 capitalize text-brand-secondary hover:underline"
          to={`/browse?topic=${article.topic}`}
        >
          {article.topic}
        </Link>
        <p className="article__author">{article.author}</p>
        <p>{formatDateTime(article.created_at)}</p>
      </div>
    </>
  );
};

export default ArticleHeader;
