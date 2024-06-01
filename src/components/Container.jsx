import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Article from './Article';
import '../assets/css/components/container.css';

function Container() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://api.realworld.io/api/articles')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);

  return (
    <div className="container-page">
      <div className="page">
        <div className="left-page">
          <div className="toggle">
            <h2>Global Feed</h2>
          </div>
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
        <div className="right-page">
          <div className="popular-tags">
            <p>Popular Tags</p>
            <div className="tag-list">
              <Link to="/">eos</Link>
              <Link to="/">est</Link>
              <Link to="/">ipsum</Link>
              <Link to="/">enim</Link>
              <Link to="/">repellat</Link>
              <Link to="/">quia</Link>
              <Link to="/">consequatur</Link>
              <Link to="/">facilis</Link>
              <Link to="/">exercitationeum</Link>
              <Link to="/">tenetur</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
