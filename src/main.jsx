import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './layouts/Root.jsx';
import Home from './components/home/Home.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from './components/login/Login.jsx';


let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: "login",
        Component: Login
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
