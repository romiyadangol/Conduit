import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignIn from './components/SignIn.jsx'
import Nav from './components/Nav.jsx'
import SignUp from './components/SignUp.jsx'
import ArticleDetail from './components/Article.jsx'
import Profile from './components/Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter([
      {
        path: '/',
        element: <Nav/>,
        
        children: [
          {
            path: '/',
            element: <App/>
          },
          {
            path: '/signIn',
            element: <SignIn/>
          },
          {
            path: '/signUp',
            element: <SignUp/>
          },
          {
            path: '/article/:slug',
            element: <ArticleDetail/>
          },
          {
            path: '/profile/:title',
            element: <Profile/>
          }


        ]
      }
    ])}/>
  </React.StrictMode>,
)
