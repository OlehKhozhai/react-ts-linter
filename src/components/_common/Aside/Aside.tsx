import React, { FC, useCallback, useState } from 'react';
import Logo from 'assets/img/logo.svg';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
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

const Aside: FC<IProps> = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen(!isMobileOpen);
  }, [isMobileOpen]);

  const drawer = (
    <>
      <img
        src={Logo}
        alt="company logo"
        width="60"
        onClick={handleDrawerToggle}
      />
      <List>
        {dispatchersTopRoutes.map(({ title, path, icon }) => (
          <ListItem key={title}>
            <Link to={path}>
              <ListItemIcon>
                <i className="material-icons md-24">{icon}</i>
              </ListItemIcon>
              <ListItemText primary={title} />
            </Link>
          </ListItem>
        ))}
      </List>

      <List>
        {dispatchersBottomRoutes.map(({ title, path, icon }) => (
          <ListItem key={title}>
            <Link to={path}>
              <ListItemIcon>
                <i className="material-icons md-24">{icon}</i>
              </ListItemIcon>
              <ListItemText primary={title} />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <div className={styles.root}>
      <nav aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={isMobileOpen}
            onClose={handleDrawerToggle}
            // classes={{
            //   paper: { width: '240' },
            // }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer variant="permanent" open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Aside;
