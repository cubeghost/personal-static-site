import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Page from '../components/Page';
import ExternalLink from '../components/ExternalLink';
import Tree from './Tree';

const Home = () => (
  <Page>
    <h1>⟡*·_</h1>
    <br /><br /><br />
    <Tree
      root="~/cubeghost"
      nodes={[
        {
          root: 'kix pix',
          nodes: [
            <Link to="/kidpix/zine" key="kidpix-zine">zine</Link>,
            <Link to="/kidpix/tutorial" key="kidpix-zine">tutorial</Link>,
          ],
        },
        {
          root: 'tumblr',
          nodes: [
            <ExternalLink href="https://tags.circumfluo.us/" key="tumblr-tagreplacer">
              tag replacer
            </ExternalLink>,
            {
              root: 'themes',
              nodes: [
                <ExternalLink href="https://www.tumblr.com/theme/39715" key="tumblr-themes-pulsar">
                  pulsar
                </ExternalLink>,
                <ExternalLink href="https://www.tumblr.com/theme/38385" key="tumblr-themes-chromosphere">
                  chromosphere
                </ExternalLink>,
              ],
            },
          ],
        },
      ]}
    />
    <br /><br /><br />
    <Tree
      root="elsewhere"
      nodes={[
        <ExternalLink href="https://github.com/cubeghost" key="github">
          github
        </ExternalLink>,
        <ExternalLink href="https://codepen.io/cubeghost" key="codepen">
          codepen
        </ExternalLink>,
        <ExternalLink href="https://twitter.com/cubeghost" key="twitter">
          twitter
        </ExternalLink>,
      ]}
    />
  </Page>
);

export default React.memo(Home);
