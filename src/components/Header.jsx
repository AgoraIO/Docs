import React from 'react';
import LogoImg from '@site/static/img/logo.svg';

export const Header = () => {
  const [isResponsive, setIsResponsive] = React.useState(false);
  const handleClick = () => setIsResponsive(!isResponsive);

  return (
    <header class="header">
      <div class="layout layout--full">
        <div class="layout__grid">
          <div class="layout__grid--fixed">
            <div class="header__brand">
              <a href="/">
                <LogoImg />
                <h1>Agora Developer Center</h1>
              </a>
            </div>
          </div>
          <div class="layout__grid--fluid">
            <div class="header__navigation">
              <ul class="header__navigation-menu header__navigation-menu--left">
                {menu.slice(0, 4).map(({ id, label, link }) => (
                  <li key={id} class={label === 'Docs' ? 'active' : ''}>
                    <a href={link}>{label}</a>
                  </li>
                ))}
              </ul>

              <ul class="header__navigation-menu header__navigation-menu--right">
                {menu.slice(4, 6).map(({ id, label, link }) => (
                  <li key={id}>
                    <a href={link}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="header__responsive">
            <div class="header__responsive-button" onClick={handleClick}>
              <span class="header__responsive-button__icon"></span>
            </div>

            <ul class={`header__responsive-menu ${isResponsive ? 'active' : ''}`}>
              {menu.slice(0, 4).map(({ id, label, link }) => (
                <li key={id} class={label === 'Docs' ? 'active' : ''}>
                  <a href={link}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

const menu = [
  {
    id: 1,
    label: 'Home',
    link: '/'
  },
  {
    id: 2,
    label: 'Docs',
    link: '/'
  },
  {
    id: 3,
    label: 'Samples',
    link: '/samples'
  },
  {
    id: 4,
    label: 'Downloads',
    link: '#'
  },
  {
    id: 5,
    label: 'Support',
    link: '#'
  },
  {
    id: 6,
    label: 'Console',
    link: '#'
  }
];
