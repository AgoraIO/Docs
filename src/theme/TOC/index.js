import React, { useContext } from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import styles from './styles.module.css';
import SearchBarWrapper from '../SearchBar';
import { usePageToc } from '@app/hooks/usePageToc';

const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

export default function TOC({ className, ...props }) {
  const toc = usePageToc();
  console.log(toc);

  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      <SearchBarWrapper />
      <p className="table-of-contents__title">Page Content</p>
      <TOCItems
        {...props}
        toc={toc}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  );
}
