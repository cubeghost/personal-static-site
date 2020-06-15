import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Page from '../components/Page';
import ExternalLink from '../components/ExternalLink';
import Tree from '../components/Tree';
import Preview from '../components/Preview';

const Home = () => (
  <Home.Page>
    <h1>⟡*·_</h1>
    <br /><br /><br />
    <Tree
      root="~/cubeghost"
      nodes={[
        <Preview
          content={<img src={require('./assets/ephemeral.gif').default} />}
          key="ephemeral-presence"
        >
          <ExternalLink href="https://ephemeral-presence.glitch.me/">
            ephemeral web presence space
          </ExternalLink>
        </Preview>,
        {
          root: (
            <Preview
              content={<img src={require('./assets/kidpix.png').default} width="32" />}
              border={false}
            >
              kid pix
            </Preview>
          ),
          nodes: [
            <Link to="/kidpix/tutorial" key="kidpix-tutorial">emulation tutorial</Link>,
            <Preview
              content={<img src={require('./assets/zine.png').default} />}
              key="kidpix-zine"
            >
              <Link to="/kidpix/zine">1.0 zine</Link>,2014
            </Preview>,
            <>
              <ExternalLink href="https://slides.com/cubeghost/kidpix" key="kidpix-talk">
                slides
              </ExternalLink>,2016
            </>,
          ],
        },
        <Preview
          content={<img src={require('./assets/plants.gif').default} />}
          key="plants-exe"
        >
          <ExternalLink href="https://codepen.io/cubeghost/full/xEJVZx" key="plants-exe">
            plants.exe
          </ExternalLink> for procgen 2016
        </Preview>,
        {
          root: 'tumblr',
          nodes: [
            <ExternalLink href="https://tags.circumfluo.us/" key="tumblr-tagreplacer">
              tag replacer
            </ExternalLink>,
            {
              root: 'themes',
              nodes: [
                <>
                  <ExternalLink href="https://www.tumblr.com/theme/39715" key="tumblr-themes-pulsar">
                    pulsar
                  </ExternalLink>,2015
                </>,
                <>
                  <ExternalLink href="https://www.tumblr.com/theme/38385" key="tumblr-themes-chromosphere">
                    chromosphere
                  </ExternalLink>,2013
                </>,
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
        <ExternalLink href="mailto:webmaster@cubegho.st" key="email">
          e-mail
        </ExternalLink>,
      ]}
    />
  </Home.Page>
);

export default React.memo(Home);

Home.Page = styled(Page)`
  max-width: 40rem;
  margin: 0 auto;

  a {
    color: blue;
  }
`;