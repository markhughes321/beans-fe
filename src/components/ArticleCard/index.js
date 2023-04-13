import React from 'react';
import './style.css';

function ArticleCard({ article }) {
  const { articleSource, articleTitle, articleImageUrl, articleCreatedDate, articleIntro } = article;

  return (
    <a className="article-link" href={article.articleUrl} target="_blank" rel="noopener noreferrer">
      <div className="article-card">
        <div className="article-image-container">
          <img className="article-image" src={articleImageUrl} alt={articleTitle} />
        </div>
        <div className="article-content">
          <div className="article-domain">{articleSource}</div>
          <h2 className="article-title">{articleTitle}</h2>
          <p className="article-description">{articleIntro}</p>
          <span className="article-date">{articleCreatedDate}</span>
        </div>
      </div>
    </a>
  );
}

export default ArticleCard;
