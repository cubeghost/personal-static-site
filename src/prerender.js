import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { ChunkExtractor } from '@loadable/server';

import Index from './index';

export default function prerender(locals) {
  const statsFile = path.resolve('dist/loadable-stats.json');
  const extractor = new ChunkExtractor({ statsFile, entrypoints: ['client'] });
  const sheet = new ServerStyleSheet();
  const helmetContext = {};

  const html = ReactDOMServer.renderToString(
    extractor.collectChunks(
      sheet.collectStyles(
        <HelmetProvider context={helmetContext}>
          <Index path={locals.path} />
        </HelmetProvider>
      )
    )
  );

  const styleTags = sheet.getStyleTags();
  const scriptTags = extractor.getScriptTags();
  const linkTags = extractor.getLinkTags();
  const { helmet } = helmetContext;
  sheet.seal();

  return `<!doctype html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${styleTags}
        ${helmet.link.toString()}
        ${linkTags}
        ${scriptTags}
        ${helmet.script.toString()}
      </head>
      <body>
        <div id="react-root" data-path="${locals.path}">${html}</div>
      </body>
    </html>
  `;
}
