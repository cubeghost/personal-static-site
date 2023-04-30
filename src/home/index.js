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
    <Tree label="~/cubeghost" root>
      <Preview
        content={<img src={require('./assets/afffirmations.png').default} alt="screenshot of the '@afffirmations generator' user interface showing a preview on one side and inputs on the other" />}
      >
        <ExternalLink href="https://afffirmations.glitch.me/">
          @afffirmations generator
        </ExternalLink>,2021
      </Preview>
      <Tree label={(
        <Preview
          content={<img src={require('./assets/kidpix.png').default} width="32" alt="kix pix studio deluxe icon" />}
          border={false}
        >
          kid pix
        </Preview>
      )}>
        <Link to="/kidpix/tutorial">studio deluxe emulation tutorial</Link>
        <Preview content={<img src={require('./assets/zine.png').default} alt="a page from my kix pix 1.0 zine" />}>
          <Link to="/kidpix/zine">1.0 zine</Link>,2014
        </Preview>
        <>
          <ExternalLink href="https://slides.com/cubeghost/kidpix">
            queens.js slides
          </ExternalLink>,2016
        </>
      </Tree>
      <Preview
        content={<img src={require('./assets/ephemeral.gif').default} alt="screenshot gif of 'ephemeral web presence space'" />}
      >
        <ExternalLink href="https://ephemeral-presence.glitch.me/">
          ephemeral web presence space
        </ExternalLink>,2019
      </Preview>
      <Preview content={<img src={require('./assets/plants.gif').default} alt="gif showing procedurally generated potted plants" />}>
        <ExternalLink href="https://codepen.io/cubeghost/full/xEJVZx">
          plants.exe
        </ExternalLink> for procgen 2016
      </Preview>
      <Preview content={<img src={require('./assets/kaleidoscope_2.gif').default} alt="gif showing kaleidoscopes made with a three.js tool" />}>
        <ExternalLink href="https://csb-4n9by.netlify.app/">
          three.js kaleidoscope tool
        </ExternalLink>,2015~2020
      </Preview>
      <Tree label="tumblr">
        <ExternalLink href="https://tags.circumfluo.us/">
          tag replacer
        </ExternalLink>
        <Tree label="themes">
          <>
            <ExternalLink href="https://www.tumblr.com/theme/39715">
              pulsar
            </ExternalLink>,2015
          </>
          <>
            <ExternalLink href="https://www.tumblr.com/theme/38385">
              chromosphere
            </ExternalLink>,2013
          </>
        </Tree>
      </Tree>
      <Preview content={<img src={require('./assets/secretbase.png').default} alt="screenshot of 'hoenn secret base designer'" />}>
        <ExternalLink href="https://archive.cubegho.st/secretbase/">
          hoenn secret base designer
        </ExternalLink>,2014~2018
      </Preview>
    </Tree>
    <br /><br /><br />
    <Tree
      root
      label="elsewhere"
    >
      <ExternalLink href="https://github.com/cubeghost">
        github
      </ExternalLink>
      <ExternalLink href="https://codepen.io/cubeghost">
        codepen
      </ExternalLink>
      <ExternalLink href="https://4-dimensional-render.tumblr.com">
        visuals
      </ExternalLink>
      <ExternalLink href="https://twitter.com/cubeghost">
        twitter
      </ExternalLink>
      <ExternalLink href="mailto:mail@cubegho.st">
        e-mail
      </ExternalLink>
    </Tree>
  </Home.Page>
);

export default React.memo(Home);

Home.Page = styled(Page)`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;

  a {
    color: blue;
  }
`;
