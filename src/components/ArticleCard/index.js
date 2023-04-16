import React from "react";
import PropTypes from "prop-types";
import { FaLink as LinkIcon } from "react-icons/fa";
import "./style.css";

function truncateText(text, wordLimit) {
  const words = text.split(" ");
  return words.length > wordLimit ? `${words.slice(0, wordLimit).join(" ")}...` : text;
}

function ArticleCard({
  article: {
    articleSource,
    articleTitle,
    articleUrl,
    articleImageUrl,
    articleCreatedDate,
    articleIntro,
  },
}) {
  const copyLinkToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(articleUrl).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  return (
    <div className="article-card">
      <a
        className="article-link"
        href={articleUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="article-header">
          <p className="article-domain">{articleSource}</p>
          <LinkIcon
            className="chain-icon"
            onClick={copyLinkToClipboard}
            title="Copy link to clipboard"
          />
        </div>
        <h2 className="article-title">{articleTitle}</h2>
        <div className="article-image-container">
          <img
            className="article-image"
            src={articleImageUrl}
            alt={articleTitle}
          />
        </div>
        <time className="article-date" dateTime={articleCreatedDate}>
          {articleCreatedDate}
        </time>
        <p className="article-description">{truncateText(articleIntro, 40)}</p>
      </a>
    </div>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleCard;
