import React from 'react'
import { platforms } from '@site/src/constants/platforms';

export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const [platform, setPlatform] = React.useState(platforms[0].value);

  
  console.log('😀', platform)

  const handlePlatformChange = (platform) => setPlatform(platform);

  const contextValue = { platform, handlePlatformChange }


  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}