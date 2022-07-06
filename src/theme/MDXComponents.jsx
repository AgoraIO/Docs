import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import { PlatformWrapper } from '@app/components/PlatformWrapper';
import { ProductWrapper } from '@app/components/ProductWrapper';

import Link from '@docusaurus/Link';

export default {
  ...MDXComponents,
  PlatformWrapper,
  ProductWrapper,
  DocPage: ({ children, ...props }) => <React.Fragment {...props}>{children}</React.Fragment>,  
  Link
};
