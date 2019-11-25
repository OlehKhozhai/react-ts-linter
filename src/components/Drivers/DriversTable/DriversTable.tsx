import React, { FC } from 'react';
import styles from 'components/Drivers/DriversTable/DriversTable.module.scss';

interface IOwnProps {}

type Props = IOwnProps;

const DriversTable: FC<Props> = () => {
  return <div className={styles.root}>DriversTable:</div>;
};

export default DriversTable;
