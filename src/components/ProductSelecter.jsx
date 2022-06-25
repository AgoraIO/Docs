import React from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import { ChevronDown } from 'react-feather';

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
    <div className="product-selecter">
      <div className="dropdown dropdown--hoverable">
        <button className="dropdown__box">
          <span>
            {selected.icon} {selected.label}
          </span>
          <ChevronDown />
        </button>
        <ul className="dropdown__menu">
          {productList.map(({ id, label, icon, link }) => (
            <li key={id}>
              <button
                onClick={() => handleSelect(id, link)}
                className={`dropdown__link ${selected.id === id ? 'active' : ''}`}
              >
                {icon} {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
