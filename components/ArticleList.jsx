import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <article className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id || article._id} />
      ))}
    </article>
  );
};

export default ArticleList;
