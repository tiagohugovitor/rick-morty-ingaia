import { lazy } from 'react';

const HomeComponent = lazy(() => import('../pages/Home'));

const Home = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: HomeComponent
  }
]

export default Home;