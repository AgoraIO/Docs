import React from 'react';

const PlatformSelector = ({ platform, children }) => {
  return <div className={platform}>{children}</div>;
};

export default PlatformSelector;
