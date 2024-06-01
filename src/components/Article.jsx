// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function ArticleDetail() {
//   const { slug } = useParams();
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     fetch(`https://api.realworld.io/api/articles/${slug}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setArticle(data.article);
//       });
//   }, [slug]);

//   if (!article) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="article-detail">
//       <h1>{article.title}</h1>
//       <p>{article.body}</p>
//     </div>
//   );
// }

// export default ArticleDetail;


// src/components/Article.js
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/components/container.css';

function Article({ article }) {
  return (
    <div className="article">
      <div className="article-head">
        <Link to={`/profile/${article.author.username}`} className="article-info">
          <div className="article-avatar">
            <img src={article.author.image} alt={`${article.author.username}'s avatar`} />
          </div>
          <div className="article-details">
            <h1>{article.author.username}</h1>
            <p>{new Date(article.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </Link>
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
}

export default Article;
