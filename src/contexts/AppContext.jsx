import React from 'react';
import { platforms } from '@site/data/platforms';
import { useLocalStorage } from '@app/hooks/useLocalStorage';
import { usePageToc } from '@app/hooks/usePageToc';

export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const [platform, setPlatform] = useLocalStorage('platform', platforms[0].value);

  const handlePlatformChange = platform => setPlatform(platform);

  const contextValue = { platform, handlePlatformChange };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
