import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Page from '../components/Page';
import Tree from '../components/Tree';

const NotFound = () => (
  <NotFound.Page>
    <h1>⟡*·_</h1>
    <br /><br /><br />
    <Tree root label="> No such file or directory 😰">
      <Link to="/" key="home">cd ~/cubeghost</Link>
    </Tree>
  </NotFound.Page>
);

export default React.memo(NotFound);

NotFound.Page = styled(Page)`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;

  a {
    color: blue;
  }
`;
