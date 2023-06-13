import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home/index.jsx';
import User from './pages/User/index.jsx';
import ErrorPage from './pages/ErrorPage/index.jsx';
import { UsuarioProvider } from './context/Usuario.jsx'

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
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsuarioProvider>
      <RouterProvider router={router} />
    </UsuarioProvider>
  </React.StrictMode>,
)
