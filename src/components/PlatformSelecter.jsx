import React from 'react';

export const PlatformSelecter = ({ label, onChange }) => {
  return (
    <button onClick={onChange}>{label}</button>
  )
}
