import React from 'react';
import { AppContext } from '@app/contexts/AppContext';

import styles from '@app/components/PlatformWrapper.module.scss';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const PlatformWrapper = ({ platform, children }) => {
  const { platform: selectedPlatform } = React.useContext(AppContext);

  return (
    <div className={styles.platformWrapper}>{platform === selectedPlatform ? children : null}</div>
  );
};
