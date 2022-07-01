import { useLocation } from '@docusaurus/router';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

export const usePageToc = () => {
  const [toc, setToc] = useState([]);
  const { pathname } = useLocation();
  const { platform } = useContext(AppContext);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));

    const toc = headingElements.map(heading => {
      const { innerText: value, id } = heading;
      const level = heading.nodeName === 'H2' ? 2 : 3;
      return {
        id,
        value,
        level
      };
    });

    setToc(toc);
  }, [pathname, platform]);
  console.log(toc);

  console.log(pathname);
  return toc;
};
