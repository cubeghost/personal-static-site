import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet-async';

import background from '../assets/sparkle.gif';

const PageStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Mono', monospace;
    background-image: url(${background});
    background-size: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: bottom left;
    image-rendering: -moz-crisp-edges;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: pixelated;

    @media screen and (max-width: 480px) {
      background-size: 200%;
    }
  }
`;

const Page = ({className, children}) => (
  <>
    <PageStyle />
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
    </Helmet>
    <Page.Container className={className}>
      {children}
    </Page.Container>
  </>
);

export default React.memo(Page);

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Page.Container = styled.div`
  padding: 2rem;
`;
