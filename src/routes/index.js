import home from './home';
import characterDetails from './characterDetails';
import notFound from './notFound';

const routes = [
  ...home,
  ...characterDetails,
  ...notFound
];

export default routes;