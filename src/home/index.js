import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>⟡*·_ cubeghost (alex baldwin)</h1>
    <ul>
      <li>
        <Link to="/kidpix">kid pix</Link>
      </li>
    </ul>
  </div>
);

export default React.memo(Home);
