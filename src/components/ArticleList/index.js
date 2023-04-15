import React from "react";
import ArticleCard from "../ArticleCard/index";
import "./style.css";

function ArticleList({ articles }) {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
