import React, { FC } from 'react';
import styles from 'components/Drivers/FooterPagination/FooterPagination.module.scss';

interface IOwnProps {}

type Props = IOwnProps;

const FooterPagination: FC<Props> = () => {
  return <div className={styles.root}>FooterPagination</div>;
};

export default FooterPagination;
