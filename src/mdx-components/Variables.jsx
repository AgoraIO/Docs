import React from 'react';
import * as globals from '@docs/shared/variables/global';
import local from '@docs/shared/variables/local';
import { useLocation } from '@docusaurus/router';

if (Object.keys(global).length === 0 || Object.keys(local).length === 0) {
  throw new Error('Local and Global Variables on path `@docs/shared/variables` are required!');
}

export const Vg = ({ k }) => {
  return <>{globals[k]}</>;
};

export const Vl = ({ k }) => {
  const { pathname } = useLocation();
  const product = pathname.split('/')[1];

  return <>{local[product]?.[k]}</>;
};
