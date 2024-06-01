// import { useEffect, useState } from 'react';
// import { Outlet, useParams } from 'react-router-dom';
// export default function Profile() {
//     const { title } = useParams();
//     const [profile, setProfile] = useState(null);

//     useEffect(() => {
//         fetch(`https://api.realworld.io/api/articles/${title}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setProfile(data.profile);
//             });
//     }, [title]);

//     if(!profile){
//         return <div>Loading...</div>
//     }
//     return(
//         <>
//         <div className="profile-info">
//             <Outlet/>
//             {/* <h1>{profile.title}</h1>
//             <p>{profile.description}</p> */}
//         </div>
//         </>
//     );
// }

// src/components/Profile.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Article from './Article';
import '../assets/css/components/container.css';

export default function Profile() {
  const { title } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://api.realworld.io/api/articles?author=${title}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, [title]);

  return (
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
  );
}
