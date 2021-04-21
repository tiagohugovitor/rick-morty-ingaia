import { lazy } from 'react';

const NotFoundComponent = lazy(() => import('../pages/NotFound'))

const NotFound = [
  {
    path: '*',
    name: 'notFound',
    component: NotFoundComponent
  }
];

export default NotFound;