import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path:'/',
        element: <Shop> </Shop>
      },
      {
        path:'orders',
        element:<Orders> </Orders>
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
