import React from 'react';
import * as globals from '@docs/shared/variables/global';
import products from '@docs/shared/variables/product';
import platforms from '@docs/shared/variables/platform';
import { AppContext } from '@app/contexts/AppContext';

import { useLocation } from '@docusaurus/router';

if (
  Object.keys(global).length === 0 ||
  (Object.keys(products).length === 0) | (Object.keys(platforms).length === 0)
) {
  throw new Error('Local and Global Variables on path `@docs/shared/variables` are required!');
}

export const Vg = ({ k }) => {
  return <>{globals[k]}</>;
};

export const Vpd = ({ k }) => {
  const { pathname } = useLocation();
  const product = pathname.split('/')[1];

  return <>{products[product]?.[k]}</>;
};

export const Vpl = ({ k }) => {
  const { platform } = React.useContext(AppContext);
  return <>{platforms[platform]?.[k]}</>;
};
