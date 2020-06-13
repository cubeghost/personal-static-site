import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom';

const HomePage = loadable(() => import('./home'));

const Index = ({ path }) => {
  const isBrowser = (typeof window !== 'undefined');
  const Router = isBrowser ? BrowserRouter : StaticRouter;

  return (
    <>
      <Router location={path}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};

Index.propTypes = {
  path: PropTypes.string,
};

export default Index;
