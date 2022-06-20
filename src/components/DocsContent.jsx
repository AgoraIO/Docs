import React from 'react';
import { AppContext } from '../contexts/AppContext';

export const DocsContent = ({ children }) => {
  const { platform } = React.useContext(AppContext);
  return (
    <div>
      {children}
    </div>
  )
};
