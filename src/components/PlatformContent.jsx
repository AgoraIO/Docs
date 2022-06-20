import React from 'react'
import { AppContext } from '../contexts/AppContext';

export const PlatformContent = ({ platform, children }) => {
  const { platform: selectedPlatform } = React.useContext(AppContext);

  console.log('😀', platform, selectedPlatform)

  return (
    platform === selectedPlatform ? children : null
  )
}
