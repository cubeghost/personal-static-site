import React from 'react';
import styled from 'styled-components';
import {range} from 'lodash';

const pages = range(0, 15).map(number => (
  require(`./assets/zine/${String(number).padStart(2, '0')}.png`).default
));

const Zine = () => (
  <Zine.Container>
    {pages.map((page, index) => (
      <Zine.Page key={index}>
        <img src={page} />
      </Zine.Page>
    ))}
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
  max-width: calc(${imageWidth} + 2rem + 2px);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;

  @media screen and (min-width: 1013px) {
    max-width: calc(((${imageWidth} + 2rem + 1px) * 2) + 1px);
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
