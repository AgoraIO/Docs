import { useHistory } from '@docusaurus/router';
import React from 'react';

export const PageLink = ({ to, children }) => {
  const history = useHistory();

  const handleClick = e => {
    e.preventDefault();
    history.createHref();
  };

  return <>{children}</>;
};
