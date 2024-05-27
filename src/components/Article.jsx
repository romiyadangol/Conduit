import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://api.realworld.io/api/articles/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.article);
      });
  }, [slug]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
}

export default ArticleDetail;
