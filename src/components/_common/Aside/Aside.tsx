import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import useStyles from 'components/_common/Aside/AsideClasses';
import Logo from 'assets/img/logo.svg';
import { dispatchersTopRoutes } from './helpers';
import styles from './Aside.module.scss';

interface IProps {}

const Aside: FC<any> = ({ isSidebarOpen, handleSidebarClose }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpen,
        [classes.drawerClose]: !isSidebarOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isSidebarOpen,
          [classes.drawerClose]: !isSidebarOpen,
        }),
      }}
      open={isSidebarOpen}
    >
      <div className={classes.toolbar}>
        <img src={Logo} alt="logo" width="24" className={styles.logo} />
        <IconButton onClick={handleSidebarClose}>
          <i className="material-icons md-24">dehaze</i>
        </IconButton>
      </div>
      <Divider />
      <List>
        {dispatchersTopRoutes.map(({ title, path, icon }) => (
          <ListItem key={title}>
            <Link to={path} className={styles.link}>
              <ListItemIcon className={styles.icon}>
                <i className="material-icons md-24">{icon}</i>
              </ListItemIcon>
              <ListItemText primary={title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Aside;
