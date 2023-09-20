import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider} from "react-router-dom";

import createdRoute from './Rout/Rout';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createdRoute}></RouterProvider>
  </React.StrictMode>,
)
