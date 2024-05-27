import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import App from './App';
import Home from './sections/Home';
import Article from './sections/Article';
import ArticleGrid from './sections/ArticleGrid';
import About from "./sections/About";

const router = createBrowserRouter(
  // funzione che crea un router a partire da elementi jsx (+ leggibile)
  // outlet serve a renderizzare i figli di un route
  createRoutesFromElements(
    <Route path="/" element={<App><Outlet/></App>}>
      <Route exact path="/"index element={<Home />} />
      <Route path="/article" index element={<Article />} />
      <Route path="/articleGrid" element={<ArticleGrid />} />
      <Route path="/about" element={<About />} />
    </Route>
  ),
  // il nostro url e' il nome della repo (github pages),  in questo modo
  // evitiamo di nominarrlo sempre nei link e nei path
  {basename: '/WebDesign78'}
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence><RouterProvider router={router}/></AnimatePresence>
  </React.StrictMode>,
)

