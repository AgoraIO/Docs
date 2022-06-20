import React from 'react';
import { AppProvider } from '@app/contexts/AppContext';

export default function Root({ children }) {
  return <AppProvider>{children}</AppProvider>;
}