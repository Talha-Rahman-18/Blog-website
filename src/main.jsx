import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Authlayout from './components/Authlayout.jsx'

// all ellements
import Home from './pages/Home.jsx'
import AllPost from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'
import Post from './pages/Post.jsx'
import EditPost from './pages/EditPost.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import Service from './pages/Service.jsx'
import About from './pages/About.jsx'
import Terms from './pages/Terms.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/login",
        element:(
          <Authlayout authentication={false}>
              <LoginPage />
          </Authlayout>
        )
      },
      {
        path:"/signup",
        element:(
          <Authlayout authentication={false}>
              <SignupPage />
          </Authlayout>
        )
      },
      {
        path:"/all-posts",
        element:(
          <Authlayout authentication>
             {" "}
              <AllPost />
          </Authlayout>
        ),
      },
      {
        path:"/post/:slug",
        element:<Post />
      },
      {
         path:"/add-post",
        element:(
          <Authlayout authentication>
             {" "}
              <AddPost />
          </Authlayout>
        ),
      },
      {
         path:"/edit-post/:slug",
        element:(
          <Authlayout authentication>
             {" "}
              <EditPost />
          </Authlayout>
        ),
      },
      {
        path:"/service",
        element:<Service />
      },
      {
        path:"/about",
        element:<About />
      },{
        path:"/terms-conditions",
        element:<Terms />
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
        <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
)
