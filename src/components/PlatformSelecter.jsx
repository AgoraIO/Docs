import React from 'react';
import clsx from 'clsx';

import { platforms } from '@app/constants/platforms';
import { AppContext } from '@app/contexts/AppContext';

import styles from '@app/components/PlatformSelecter.module.scss';
import useFrontMatter from '@theme/useFrontMatter';

export const PlatformSelecter = () => {
  const { platform, handlePlatformChange } = React.useContext(AppContext);

  const { template } = useFrontMatter();

  if (template !== 'platform') return null;

  return (
    <div className={styles.platformSelecter}>
      {platforms.map(({ label, value }) => (
        <button
          className={clsx(styles.platformSelecterButton, platform === value && styles.active)}
          label={label}
          onClick={() => handlePlatformChange(value)}
          key={value}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
