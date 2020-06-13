import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import { HelmetProvider } from 'react-helmet-async';

import Index from './index';

loadableReady(() => {
  const root = document.getElementById('react-root');
  const path = root.dataset.path;

  const App = (
    <HelmetProvider>
      <Index path={path} />
    </HelmetProvider>
  );

  ReactDOM.hydrate(App, root);
});
