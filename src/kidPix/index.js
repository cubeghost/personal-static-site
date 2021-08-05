import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import Page from '../components/Page';
import Tree from '../components/Tree';
import Preview from '../components/Preview';
import ExternalLink from '../components/ExternalLink';

const Tutorial = loadable(() => import('./Tutorial'));
const Zine = loadable(() => import('./Zine'));

const KidPix = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <KidPix.Page>
          <Tree
            root="~/cubeghost"
            nodes={[{
              root: (
                <Preview
                  content={<img src={require('../home/assets/kidpix.png').default} width="32" alt="kix pix studio deluxe icon" />}
                  border={false}
                >
                  kid pix
                </Preview>
              ),
              nodes: [
                <Link to="/kidpix/tutorial" key="kidpix-tutorial">studio deluxe emulation tutorial</Link>,
                <Preview
                  content={<img src={require('../home/assets/zine.png').default} alt="a page from my kix pix 1.0 zine" />}
                  key="kidpix-zine"
                >
                  <Link to="/kidpix/zine">1.0 zine</Link>,2014
                </Preview>,
                <>
                  <ExternalLink href="https://slides.com/cubeghost/kidpix" key="kidpix-talk">
                    queens.js slides
                  </ExternalLink>,2016
                </>,
              ],
            }]}
          />
        </KidPix.Page>
      </Route>
      <Route path={`${path}/zine`} component={Zine} />
      <Route path={`${path}/tutorial`} component={Tutorial} />
    </Switch>
  );
};

export default React.memo(KidPix);

KidPix.Page = styled(Page)`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;

  a {
    color: blue;
  }
`;