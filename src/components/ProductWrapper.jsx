import { useLocation } from '@docusaurus/router';
import React, { useEffect, useState } from 'react';

export const ProductWrapper = ({ notAllowed, product, children }) => {
  const [currentProduct, setCurrentProduct] = useState();

  const { pathname } = useLocation();

  useEffect(() => {
    const currentProduct = pathname.split('/')[1];
    setCurrentProduct(currentProduct);
  }, [pathname]);

  if (currentProduct !== product) return null;
  if (currentProduct === notAllowed) return null;

  return children;
};
