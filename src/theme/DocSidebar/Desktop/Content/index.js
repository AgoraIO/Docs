import React from 'react';
import Content from '@theme-original/DocSidebar/Desktop/Content';
import { ProductSelecter } from '@app/components/ProductSelecter';

export default function ContentWrapper(props) {
  return (
    <>
      <ProductSelecter />
      <Content {...props} />
    </>
  );
}
