import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

const Tutorial = loadable(() => import('./Tutorial'));

const KidPix = () => {
  const { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <h1>kid pix</h1>
        <ul>
          <li>
            <Link to={`${url}/tutorial`}>kid pix studio deluxe tutorial</Link>
          </li>
        </ul>
      </Route>
      <Route path={`${path}/tutorial`} component={Tutorial} />
    </Switch>
  );
};

export default React.memo(KidPix);
