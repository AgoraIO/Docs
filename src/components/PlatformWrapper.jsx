import React, { useEffect } from 'react';
import queryString from 'query-string';
import styles from '@app/components/PlatformWrapper.module.scss';
import { AppContext } from '@app/contexts/AppContext';
import { useHistory, useLocation } from '@docusaurus/router';

// TODO: Update Route Based Platform Selectors

export const PlatformWrapper = ({ platform, children }) => {
  const { platform: selectedPlatform, handlePlatformChange } = React.useContext(AppContext);

  const { pathname, search } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const { platform } = queryString.parse(location);
    if (platform) handlePlatformChange(platform);
  }, []);

  useEffect(() => {
    const path = `${pathname}?platform=${selectedPlatform}`;
    history.push(path);
  }, [pathname, selectedPlatform]);

  return (
    <div className={styles.platformWrapper}>{platform === selectedPlatform ? children : null}</div>
  );
};
