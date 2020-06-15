import React from 'react';

const ExternalLink = props => (
  <a target="_blank" rel="noreferrer noopener" {...props} />
);

export default React.memo(ExternalLink);
