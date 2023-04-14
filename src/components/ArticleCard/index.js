import React from "react";
import "./style.css";

function ArticleCard({ article }) {
  const {
    articleSource,
    articleTitle,
    articleImageUrl,
    articleCreatedDate,
    articleIntro,
  } = article;

  return (
    <div className="article-card">
      <div className="article-content">
        <a
          className="article-link"
          href={article.articleUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="article-domain">{articleSource}</p>
          <h2 className="article-title">{articleTitle}</h2>
          <div className="article-image-container">
            <img
              className="article-image"
              src={articleImageUrl}
              alt={articleTitle}
            />
          </div>
            <p className="article-date">{articleCreatedDate}</p>
            <p className="article-description">{articleIntro}</p>
        </a>
      </div>
    </div>
  );
}

export default ArticleCard;
