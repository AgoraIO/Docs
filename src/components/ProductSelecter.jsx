import React from 'react';
import { useHistory, useLocation } from '@docusaurus/router';

import { products } from '@site/data/products';

const productList = [...products.core];

export const ProductSelecter = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const productPath = pathname.split('/')[1];

  const [selected, setSelected] = React.useState(
    () => productList.filter(({ id }) => id === productPath)[0]
  );

  const handleSelect = (productId, link) => {
    const product = productList.filter(({ id }) => id === productId)[0];
    setSelected(product);
    history.push(link);
  };

  return (
    <div className="dropdown dropdown--hoverable">
      <button className="">{selected.label}</button>
      <ul className="dropdown__menu">
        {productList.map(({ id, label, icon, link }) => (
          <li key={id}>
            <button onClick={() => handleSelect(id, link)} className="dropdown__link">
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
