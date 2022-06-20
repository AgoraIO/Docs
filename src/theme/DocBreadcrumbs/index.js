import React from 'react';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';

import { PlatformSelecter } from '@app/components/PlatformSelecter';

export default function DocBreadcrumbsWrapper(props) {
  return (
    <>
      <PlatformSelecter />
      <DocBreadcrumbs {...props} />
    </>
  );
}
