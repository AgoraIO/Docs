import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from '@docusaurus/router';
import { platforms } from '@site/data/platforms';
import { useLocalStorage } from '@app/hooks/useLocalStorage';

export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const [platform, setPlatform] = useLocalStorage('platform', platforms[0].value);

  const handlePlatformChange = platform => setPlatform(platform);

  const { search } = useLocation();

  useEffect(() => {
    const { platform } = queryString.parse(search);
    if (platform) handlePlatformChange(platform);
  }, []);

  const contextValue = { platform, handlePlatformChange };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
