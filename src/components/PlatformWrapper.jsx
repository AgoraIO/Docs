import React from 'react'
import { AppContext } from '@app/contexts/AppContext';

export const PlatformWrapper = ({ platform, children }) => {
  const { platform: selectedPlatform } = React.useContext(AppContext);
  
  return (
    platform === selectedPlatform ? children : null
  )
}
