import React, { FC } from 'react';
import Header from 'components/_common/Header/Header';
import DriversTable from 'components/Drivers/DriversTable/DriversTable';
import FooterPagination from 'components/Drivers/FooterPagination/FooterPagination';
import Aside from 'components/_common/Aside/Aside';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';

import makeClasses from 'components/Drivers/makeClasses';
import styles from './Drivers.module.scss';

interface IOwnProps {}

type Props = IOwnProps;

const Drivers: FC<Props> = () => {
  const classes = makeClasses();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        status={open}
        handleDrawerOpen={handleDrawerOpen}
        classes={classes}
      />
      <Aside
        status={open}
        handleDrawerClose={handleDrawerClose}
        classes={classes}
      />
      <main className={clsx(classes.content, styles.main)}>
        <DriversTable />
        <FooterPagination />
      </main>
    </div>
  );
};

export default Drivers;
