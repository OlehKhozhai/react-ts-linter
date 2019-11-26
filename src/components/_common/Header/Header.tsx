import React, { FC } from 'react';
import SearchPanel from 'components/_common/SearchPanel/SearchPanel';
import AppBar from '@material-ui/core/AppBar/AppBar';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import style from './Header.module.scss';

const Header: FC<any> = ({ status, handleDrawerOpen, classes }) => (
  <AppBar
    position="fixed"
    style={{ border: '1px solid red' }}
    className={clsx(classes.appBar, {
      [classes.appBarShift]: status,
    })}
  >
    <Toolbar>
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: status,
        })}
      >
        <i className="material-icons md-24">dehaze</i>
      </IconButton>
      <SearchPanel />
    </Toolbar>
  </AppBar>
);

export default Header;
