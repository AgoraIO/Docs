import React from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

import { AppContext } from '@app/contexts/AppContext';

import * as globals from '@docs/shared/variables/global';
import products from '@docs/shared/variables/product';
import platforms from '@docs/shared/variables/platform';

export const DocLink = ({ to, children, ...props }) => {
  const { pathname } = useLocation();
  const { platform } = React.useContext(AppContext);
  const product = pathname.split('/')[1];

  let link = to;
  let values = getFromBetween.get(to, '{{', '}}');

  if (values.length) {
    values.map(value => {
      let scope = value.split('.')[0];
      let hash = value.split('.')[1];
      if (scope === 'product') {
        link = link.replace(`{{${value}}}`, products[product]?.[hash]);
      } else if (scope === 'platform') {
        link = link.replace(`{{${value}}}`, platforms[platform]?.[hash]);
      } else {
        link = link.replace(`{{${value}}}`, globals[hash]);
      }
    });
  }

  return (
    <Link to={link} {...props}>
      {children}
    </Link>
  );
};

const getFromBetween = {
  results: [],
  string: '',
  getFromBetween: function (sub1, sub2) {
    if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
    let SP = this.string.indexOf(sub1) + sub1.length;
    let string1 = this.string.substr(0, SP);
    let string2 = this.string.substr(SP);
    let TP = string1.length + string2.indexOf(sub2);
    return this.string.substring(SP, TP);
  },
  removeFromBetween: function (sub1, sub2) {
    if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
    let removal = sub1 + this.getFromBetween(sub1, sub2) + sub2;
    this.string = this.string.replace(removal, '');
  },
  getAllResults: function (sub1, sub2) {
    // first check to see if we do have both substrings
    if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;

    // find one result
    let result = this.getFromBetween(sub1, sub2);
    // push it to the results array
    this.results.push(result);
    // remove the most recently found one from the string
    this.removeFromBetween(sub1, sub2);

    // if there's more substrings
    if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
      this.getAllResults(sub1, sub2);
    } else return;
  },
  get: function (string, sub1, sub2) {
    this.results = [];
    this.string = string;
    this.getAllResults(sub1, sub2);
    return this.results;
  }
};
