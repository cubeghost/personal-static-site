import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom';

import StyleReset from './style/reset';
import Favicon from './assets/favicon.ico';

const HomePage = loadable(() => import('./home'));
const KidPixPage = loadable(() => import('./kidPix'));
const NotFoundPage = loadable(() => import('./home/notFound'));

const Index = ({ path }) => {
  const isBrowser = (typeof window !== 'undefined');
  const Router = isBrowser ? BrowserRouter : StaticRouter;

  return (
    <>
      <StyleReset />
      <Helmet defaultTitle="cubegho.st" titleTemplate="%s | cubegho.st">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/x-icon" href={Favicon} />

        <script async defer data-domain="cubegho.st" src="https://plausible.io/js/plausible.js" />
      </Helmet>
      <Router location={path}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/kidpix" component={KidPixPage} />
          <Route path="/not-found" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};

Index.propTypes = {
  path: PropTypes.string,
};

export default Index;
