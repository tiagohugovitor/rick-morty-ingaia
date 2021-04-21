import { lazy } from 'react';

const NotFoundComponent = lazy(() => import('../pages/NotFound'))

const NotFound = [
  {
    path: '*',
    exact: true,
    name: 'notFound',
    component: NotFoundComponent
  }
];

export default NotFound;