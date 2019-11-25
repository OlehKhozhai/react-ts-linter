import React, { FC } from 'react';
import Header from 'components/_common/Header/Header';
import DriversTable from 'components/Drivers/DriversTable/DriversTable';
import FooterPagination from 'components/Drivers/FooterPagination/FooterPagination';
import Aside from 'components/_common/Aside/Aside';
import styles from './Drivers.module.scss';

interface IOwnProps {}

type Props = IOwnProps;

const Drivers: FC<Props> = () => {
  return (
    <section className={styles.root}>
      <Aside />
      <main>
        <Header />
        <DriversTable />
        <FooterPagination />
      </main>
    </section>
  );
};

export default Drivers;
