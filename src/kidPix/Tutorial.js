import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import tutorial from './tutorial.md';
import { Helmet } from 'react-helmet-async';

const Tutorial = () => (
  <Tutorial.Container>
    <Helmet>
      <title>Kid Pix Studio Deluxe on macOS</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
    </Helmet>
    <ReactMarkdown
      source={tutorial}
      escapeHtml={false}
    />
  </Tutorial.Container>
);

export default React.memo(Tutorial);

const purple = '#7979ed';
const lightPurple = '#9a9afc';

Tutorial.Container = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
  font-size: 18px;
  max-width: 40rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.17em; }

  h1, h2, h3 {
    display: table;
    margin-top: 1.5rem;
    border-bottom: 3px solid ${lightPurple};
  }

  p, ul, blockquote {
    margin: 1rem 0;
  }

  img {
    max-width: 100%;
  }

  em { font-style: italic; }
  strong { font-weight: bold; }
  code {
    font-family: 'Roboto Mono', monospace;
    background-color: #eee;
    font-size: 16px;
  }

  blockquote {
    margin-left: 1rem;
    padding-left: 1rem;
    border-left: 5px solid lightgray;
    font-style: italic;
  }

  a {
    color: ${purple};
  }
  a:hover, a:active, a:focus {
    color: ${lightPurple};
  }

  ul {
    list-style-type: '◇';
    margin-left: 2rem;
  }
  ul li {
    padding-left: 0.5rem;
  }

  hr {
    border: 0;
    margin: 1.5rem 0;
  }
  hr:after {
    content: '-------------------------------------------------------------------------------------------------------------------------';
    color: transparent;
    text-decoration-line: line-through;
    text-decoration-color: ${lightPurple};
    text-decoration-style: wavy;
    font-size: 24px;
    overflow: hidden;
    white-space: nowrap;
  }
`;
