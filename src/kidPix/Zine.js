import React from 'react';
import styled from 'styled-components';
import { range } from 'lodash';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


const pages = range(0, 15).map(number => (
  require(`./assets/zine/${String(number).padStart(2, '0')}.png`).default
));

const Zine = () => (
  <Zine.Container>
    <Helmet>
      <title>kid pix 1.0: a zine</title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
    </Helmet>
    <Zine.Back>
      <Link to="/">← cubegho.st</Link>
    </Zine.Back>
    <Zine.Pages>
      {pages.map((page, index) => (
        <Zine.Page key={index}>
          <img src={page} />
        </Zine.Page>
      ))}
    </Zine.Pages>
    <Zine.Description>
      <p>
        this is a zine i wrote in 2014, created entirely in kid pix 1.0.
      </p>
      <p>
        for an early history of kid pix, see craig hickman&#x27;s post <a href="http://red-green-blue.com/kid-pix-the-early-years/" target="_blank" rel="noreferrer noopener">kid pix: the early years</a>.
      </p>
      <p>
        ~ <a href="https://twitter.com/cubeghost" target="_blank" rel="noreferrer noopener">@cubeghost</a>
      </p>
    </Zine.Description>
  </Zine.Container>
);

export default React.memo(Zine);

const imageWidth = '473px';

Zine.Container = styled.div`
  font-family: 'Roboto Mono', monospace;
  max-width: calc(${imageWidth} + 2rem + 2px);
  width: 100%;
  margin: 2rem auto;

  @media screen and (min-width: 1013px) {
    max-width: calc(((${imageWidth} + 2rem + 1px) * 2) + 1px);
  }
`;

Zine.Back = styled.div`
  a {
    color: #444;
    text-decoration: none;
    font-size: 0.8rem;
  }
`;

Zine.Pages = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media screen and (min-width: 1013px) {
    margin-top: 20vh;
  }
`;

Zine.Page = styled.div`
  padding: 1rem;
  border: 1px solid #000;
  margin: 0 auto 2rem;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: -moz-crisp-edges;
  image-rendering: pixelated;
  
  @media screen and (min-width: 1013px) {
    &:first-child {
      margin-left: calc(${imageWidth} + 2rem + 1px);
    }
    &:nth-child(2n + 2) {
      border-right-width: 0;
    }
  }

  img {
    width: ${imageWidth};
    height: 279px;
    margin: 0 auto;
    display: block;
  }
`;

Zine.Description = styled.div`
  margin-top: 4rem;
`;
