import React from 'react';
import DocItem from '@theme-original/DocItem';
import { Context } from '@theme/useFrontMatter';

import { PlatformSelecter } from '@app/components/PlatformSelecter';

export default function DocItemWrapper(props) {
  return (
    <Context.Provider value={props.content.frontMatter}>
      <PlatformSelecter />
      <DocItem {...props} />
    </Context.Provider>
  );
}
