import React from 'react';

const platformList = [
  { label: 'Android', value: 'android' },
  { label: 'iOS', value: 'ios' },
  { label: 'Web', value: 'web' }
];

const PlatformSelector = () => {
  const [selectedPlatform, setSelectedPlatform] = React.useState(platformList[0].value);

  return (
    <>
      {platformList.map(({ label, value }) => (
        <button onClick={() => setSelectedPlatform(value)}>{label}</button>
      ))}
      <PlatformContent platform={selectedPlatform} />
    </>
  );
};

export default PlatformSelector;

export const PlatformContent = ({ platform, children }) => {
  const Component = React.createElement(children, { platform });
  return <>{<Component />}</>;
};
