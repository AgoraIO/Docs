import { useLocation } from '@docusaurus/router';
import React, { useEffect, useState } from 'react';

export const ProductWrapper = ({ product, children }) => {
  const [currentProduct, setCurrentProduct] = useState();

  const { pathname } = useLocation();

  useEffect(() => {
    const currentProduct = pathname.split('/')[1];
    setCurrentProduct(currentProduct);
  }, [pathname]);

  console.log(currentProduct);

  if (currentProduct !== product) return null;

  return <>{children}</>;
};
