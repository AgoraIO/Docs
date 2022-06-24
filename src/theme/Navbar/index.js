import React from 'react';
import Navbar from '@theme-original/Navbar';
import { Header } from '@app/components/Header';

export default function NavbarWrapper(props) {
  return (
    <>
      <Header />
      <Navbar {...props} />
    </>
  );
}
