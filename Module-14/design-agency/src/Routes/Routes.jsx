import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Team from '../Pages/Team/Team';
import Service from '../Pages/Service/Service';
import Projects from '../Pages/Projects/Projects';
import Testimonials from '../Pages/Testimonials/Testimonials';
import Error from '../Pages/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/team',
        element: <Team></Team>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/testimonials',
        element: <Testimonials></Testimonials>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },
]);

export default router;