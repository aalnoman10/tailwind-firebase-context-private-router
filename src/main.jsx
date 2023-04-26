import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Leyout from './components/Leyout';
import Home from './components/Home.jsx';
import Login from './components/Login';
import Resister from './components/Resister';
import AuthProvider from './components/Provider/AuthProvider';
import Profile from './components/Profile';
import Private from './components/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Leyout></Leyout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/resister",
        element: <Resister></Resister>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/profile",
        element: <Private><Profile></Profile></Private>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
