import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Article from './Article';
import '../assets/css/components/profile.css';
import '../assets/css/components/container.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


export default function Profile() {
  const { title } = useParams(); 
  const [profile, setProfile] = useState(null); 
  const [articles, setArticles] = useState([]); 
  useEffect(() => {
    fetch(`https://api.realworld.io/api/articles?author=${title}`)
      .then((response) => response.json()) 
      .then((data) => {
          setProfile(data.articles[0].author); 
          setArticles(data.articles);
      });
  }, [title]); 

  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div className="bio">
        <div className="image">
        {profile.image && <img src={profile.image} alt={profile.username} className="profile-image" />}
        <h1>{profile.username}</h1>
        </div>
        <div className="follow">
        <button className="follow-button">
        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
            Follow {title}</button>
        </div>
    </div>
    <div className="container-page">
      <div className="page">
        <div className="left-page">
          <div className="toggle">
            <h2>My Articles</h2>
          </div>
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
