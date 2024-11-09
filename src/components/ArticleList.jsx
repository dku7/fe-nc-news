import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.article_id}>
          <div className="my-3">
            <Link
              className="hover:text-brand-secondary text-sm"
              to={`/articles/${article.article_id}`}
            >
              {article.title}
            </Link>
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
