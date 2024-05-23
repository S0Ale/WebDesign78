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

const router = createBrowserRouter(
  // funzione che crea un router a partire da elementi jsx (+ leggibile)
  createRoutesFromElements(
    <Route path="/" element={<App><Outlet/></App>}>
      <Route index element={<Home />} />
      <Route path="/article" element={<Article />} />
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

