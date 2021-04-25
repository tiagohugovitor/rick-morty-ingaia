import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {ThemeProvider} from 'styled-components';
import {ApolloProvider} from '@apollo/react-hooks';
import {globalStyle as GlobalStyle} from './styles/globalStyles';
import api from './services';
import routes from './routes';
import theme from './styles/theme';

ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={api}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
              <Switch>
                <Suspense fallback={<div>Loading</div>}>
                  {routes.map((route) => (
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
          </ThemeProvider>
        </MuiThemeProvider>
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
