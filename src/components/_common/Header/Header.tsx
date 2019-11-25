import React from 'react';
import SearchPanel from 'components/_common/SearchPanel/SearchPanel';
import style from './Header.module.scss';

const Header = () => (
  <header className={style.root}>
    <h2>Drivers * 232</h2>
    <SearchPanel />
  </header>
);

export default Header;
