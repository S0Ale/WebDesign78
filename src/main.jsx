import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import Home from './sections/Home';
import Article from './sections/Article';

const router = createBrowserRouter([
  {
    path: "/WebDesign78/",
    element: <Home/>,
  },
  {
    path: "/WebDesign78/",
    element: <Article/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App><RouterProvider router={router}/></App>
  </React.StrictMode>,
)

