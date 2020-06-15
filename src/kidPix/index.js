import React from 'react';
// import styled from 'styled-components';
import loadable from '@loadable/component';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import Page from '../components/Page';

const Tutorial = loadable(() => import('./Tutorial'));
const Zine = loadable(() => import('./Zine'));

const KidPix = () => {
  const { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Page>
          <h1>kid pix</h1>
          <ul>
            <li>
              <Link to={`${url}/zine`}>kid pix 1.0: a zine</Link>
            </li>
            <li>
              <Link to={`${url}/tutorial`}>kid pix studio deluxe tutorial</Link>
            </li>
          </ul>
        </Page>
      </Route>
      <Route path={`${path}/zine`} component={Zine} />
      <Route path={`${path}/tutorial`} component={Tutorial} />
    </Switch>
  );
};

export default React.memo(KidPix);
