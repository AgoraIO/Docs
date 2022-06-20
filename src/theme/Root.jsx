import React from 'react';
import { AppProvider } from '../contexts/AppContext';


export default function Root({ children }) {
  console.log('😀')
  return <AppProvider>{children}</AppProvider>;
}