import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './component/Users/Users';
import UserDetails from './component/UserDetails/UserDetails';
import ErrorPage from './component/Error page/ErrorPage';
import Default from './component/Default/Default';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Default></Default>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),   //fetched data
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
