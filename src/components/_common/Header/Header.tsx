import React, { FC } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import SearchPanel from 'components/_common/SearchPanel/SearchPanel';
import useStyles from 'components/_common/Header/HeaderClasses';
// import style from './Header.module.scss';

const Header: FC<any> = ({ isSidebarOpen, handleSidebarOpen }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isSidebarOpen,
      })}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={handleSidebarOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: isSidebarOpen,
          })}
        >
          <i className="material-icons md-24">dehaze</i>
        </IconButton>
        <SearchPanel />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
