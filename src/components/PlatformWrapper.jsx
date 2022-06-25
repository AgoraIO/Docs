import React from 'react';

import styles from '@app/components/PlatformWrapper.module.scss';
import { AppContext } from '@app/contexts/AppContext';

export const PlatformWrapper = ({ platform, children }) => {
  const { platform: selectedPlatform } = React.useContext(AppContext);

  return (
    <div className={styles.platformWrapper}>{platform === selectedPlatform ? children : null}</div>
  );
};
