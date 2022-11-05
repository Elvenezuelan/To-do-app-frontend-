import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/home'
// import './index.css'
import {createBrowserRouter, RouterProvider, Router, UNSAFE_NavigationContext} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:  "/" ,
    element: <Home />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
)
