import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/components/container.css';
import { Link } from 'react-router-dom';

function App() {
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
          {articles.map((article, index) => {
            return (
              <div className="article" key={index}>
                <div className="article-head">
                  <div className="article-info">
                    <div className="article-avatar">
                      <img src={article.author.image} />
                    </div>
                    <div className="article-details">
                      <h1>{article.author.username}</h1>
                      <p>{new Date(article.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>
                  <div className="article-favorite">
                    <button className="heart-btn">
                      <FontAwesomeIcon icon={faHeart} />
                      {article.favoritesCount}
                    </button>
                  </div>
                </div>

                <Link to={`/article/${article.slug}`} className="article-content">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                </Link>

                <div className="article-bottom">
                  <span>Read more...</span>
                  <div className="article-tags">
                    {article.tagList.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
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

export default App;
