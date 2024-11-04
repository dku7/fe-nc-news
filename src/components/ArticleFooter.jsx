const ArticleFooter = ({ article }) => (
  <div className="m-4">
    <span className="pr-4">votes: {article.votes}</span>
    <span>comments: {article.comment_count}</span>
  </div>
);

export default ArticleFooter;
