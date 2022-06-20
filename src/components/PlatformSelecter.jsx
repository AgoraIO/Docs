import React from 'react';
import { platforms } from '@app/constants/platforms';
import { AppContext } from '@app/contexts/AppContext';

import styles from '@app/components/PlatformSelecter.module.scss';
import clsx from 'clsx';


export const PlatformSelecter = () => {
  const { platform, handlePlatformChange } = React.useContext(AppContext);

  console.log(styles)

  return (
    <div className={styles.platformSelecter}>
      {platforms.map(({ label, value }) => (
        <button className={clsx(styles.platformSelecterButton, platform === value && styles.activeW )} label={label} onChange={() => handlePlatformChange(value)} key={value}>
          {label}
        </button>
      ))}
    </div>
  )
}
