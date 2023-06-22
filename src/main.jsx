import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home/index.jsx';
import User from './pages/User/index.jsx';
import Favoritos from './pages/Favoritos/index.jsx';
import ErrorPage from './pages/ErrorPage/index.jsx';
import Portfolio from './pages/Portfolio/index.jsx'
import { UsuarioProvider } from './Context/Usuario.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'user',
        element: <User/>,
      },
      {
        path: 'portfolio',
        element: <Portfolio/>,
      },
    ]
  },
  {
    path: '/favoritos',
    element: <Favoritos/>,
    errorElement: <ErrorPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsuarioProvider>
      <RouterProvider router={router} />
    </UsuarioProvider>
  </React.StrictMode>,
)
