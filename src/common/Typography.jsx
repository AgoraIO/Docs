import clsx from 'clsx';
import React from 'react';

export const Typography = ({ as: Tag = 'p', variant, children }) => {
  return (
    <Tag className={clsx('typography', variant ? `typography--${variant}` : '')}>{children}</Tag>
  );
};
