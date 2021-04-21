import { lazy } from 'react';

const CharacterDetailsComponent = lazy(() => import('../pages/CharacterDetails'))

const CharacterDetails = [
  {
    path: '/character/:name',
    name: 'character',
    exact: true,
    component: CharacterDetailsComponent
  }
];

export default CharacterDetails;