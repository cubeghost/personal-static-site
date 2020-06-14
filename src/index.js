import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom';

import StyleReset from './style/reset';
import GlobalStyle from './style/global';

const HomePage = loadable(() => import('./home'));
const KidPixPage = loadable(() => import('./kidPix'));

const Index = ({ path }) => {
  const isBrowser = (typeof window !== 'undefined');
  const Router = isBrowser ? BrowserRouter : StaticRouter;

  return (
    <>
      <StyleReset />
      <GlobalStyle />
      <Helmet defaultTitle="cubegho.st" titleTemplate=" | cubegho.st">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Helmet>
      <Router location={path}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/kidpix" component={KidPixPage} />
        </Switch>
      </Router>
    </>
  );
};

Index.propTypes = {
  path: PropTypes.string,
};

export default Index;
