import React from 'react';
import clsx from 'clsx';

import { platforms } from '@site/data/platforms';
import { AppContext } from '@app/contexts/AppContext';

export const PlatformSelecter = () => {
  const { platform, handlePlatformChange } = React.useContext(AppContext);

  return (
    <div className="platformSelecter">
      {platforms.map(({ label, value }) => (
        <button
          className={clsx('platformSelecterButton', platform === value ? 'active' : '')}
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
