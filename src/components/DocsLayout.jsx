import React from 'react';
import { AppContext } from '../contexts/AppContext';
import { DocsContent } from './DocsContent';
import { PlatformSelecter } from './PlatformSelecter';
import { platforms } from '@site/src/constants/platforms';

const DocsLayout = ({children}) => {
  // const [selectedPlatform, setSelectedPlatform] = React.useState(platformList[0].value);

  const {platform, handlePlatformChange} = React.useContext(AppContext);

  return (
    <>
      {platforms.map(({ label, value }) => (
        <PlatformSelecter label={label} onChange={() => handlePlatformChange(value)} key={value} />
      ))}
      <DocsContent platform={platform}>
        {children}
      </DocsContent>
    </>
  );
};

export default DocsLayout;