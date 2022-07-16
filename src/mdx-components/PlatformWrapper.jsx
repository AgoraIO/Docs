import React, { useEffect } from 'react';
import { AppContext } from '@app/contexts/AppContext';
import { useHistory, useLocation } from '@docusaurus/router';

// TODO: Update Route Based Platform Selectors

export const PlatformWrapper = ({ platform, children, ...props }) => {
  const { platform: selectedPlatform } = React.useContext(AppContext);

  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const path = `${pathname}?platform=${selectedPlatform}`;
    history.push(path);
  }, [pathname, selectedPlatform]);

  return <div {...props}>{platform === selectedPlatform ? children : null}</div>;
};
