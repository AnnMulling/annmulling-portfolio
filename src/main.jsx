import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './routes/root.jsx';
import ErrorPage from './routes/error-page.jsx';
import AboutMe from './components/AboutPage/About.jsx';
import Work from './components/ProjectPage/Project.jsx';

import './style/Main.css'
import Project1 from './components/ProjectPage/Project1.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/aboutme",
    element: <AboutMe/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/work",
    element: <Work />,
    errorElement: <ErrorPage />
  },
  {
    path: "/testproject",
    element: <Project1 />

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
