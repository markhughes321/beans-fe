import React, { useEffect, useState } from 'react';
import ArticleList from '../../components/ArticleList';
import Header from '../../components/Header';

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div>
      <Header />
      <div>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}

export default Home;
