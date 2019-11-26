import React, { FC } from 'react';
import Logo from 'assets/img/logo.svg';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import styles from './Aside.module.scss';

interface IProps {}

const dispatchersTopRoutes = [
  { title: 'Drivers list', path: '/drivers', icon: 'list' },
  { title: 'Fleet', path: '/fleet', icon: 'toll' },
  { title: 'Orders', path: '/orders', icon: 'toc' },
];

const dispatchersBottomRoutes = [
  {
    title: 'Notifications',
    path: '/notifications',
    icon: 'notifications_none',
  },
  { title: 'Settings', path: '/settings', icon: 'settings_applications' },
  { title: 'Nick Jackson', path: '/profile', icon: 'accessibility_new' },
];

const Aside: FC<any> = ({ status, handleDrawerClose, classes }) => {
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: status,
        [classes.drawerClose]: !status,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: status,
          [classes.drawerClose]: !status,
        }),
      }}
      open={status}
    >
      <div className={classes.toolbar}>
        <img src={Logo} alt="logo" width="24" className={styles.logo} />
        <IconButton onClick={handleDrawerClose}>
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
