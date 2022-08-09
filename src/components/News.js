import React from 'react';

const News = ({news}) => {

  const listArticles = news.map((article) => {
    return <li>{article.category}<br/>{article.title}</li>
  })

  return (
    <div>
      <h4>Some News</h4>
      <ul>
        { listArticles }
      </ul>
    </div>
  )
};

export default News;
