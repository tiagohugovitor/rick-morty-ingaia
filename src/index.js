import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>Loading</div>}>
        {routes.map(route => (
          <Route
            key={route.name}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
        </Suspense>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

