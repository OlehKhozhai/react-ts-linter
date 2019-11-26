import React, { FC, useCallback, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';

import Header from 'components/_common/Header/Header';
import DriversTable from 'components/Drivers/DriversTable/DriversTable';
import FooterPagination from 'components/Drivers/FooterPagination/FooterPagination';
import Aside from 'components/_common/Aside/Aside';
import useStyles from 'components/Drivers/DriversClasses';
import styles from './Drivers.module.scss';

interface IOwnProps {}

type Props = IOwnProps;

const Drivers: FC<Props> = () => {
  const classes = useStyles();
  const [isSidebarOpen, setSidebarVisibility] = useState(true);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        isSidebarOpen={isSidebarOpen}
        handleSidebarOpen={handleSidebarOpen}
      />
      <Aside
        isSidebarOpen={isSidebarOpen}
        handleSidebarClose={handleSidebarClose}
      />
      <main className={clsx(classes.content, styles.main)}>
        <DriversTable />
        <FooterPagination />
      </main>
    </div>
  );
};

export default Drivers;
