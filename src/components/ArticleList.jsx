import { Link } from "react-router-dom";

const ArticleList = ({ articles, showTopic }) => {
  return (
    <ul className="mb-4">
      {articles.map((article) => (
        <li key={article.article_id}>
          <div className="my-3">
            <Link
              className="hover:text-brand-secondary text-pretty text-sm hover:underline"
              to={`/articles/${article.article_id}`}
            >
              {article.title}
            </Link>
            {showTopic && (
              <Link
                className="text-brand-secondary mt-1 block text-xs capitalize hover:underline"
                to={`/browse?topic=${article.topic}`}
              >
                {article.topic}
              </Link>
            )}
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
