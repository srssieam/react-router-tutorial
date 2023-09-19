import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: 'header',
    element: <Header></Header>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
