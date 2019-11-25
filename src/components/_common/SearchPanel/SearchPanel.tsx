import React, { FC } from 'react';
import styles from './SearchPanel.module.scss';

interface IOwnProps {}

type Props = IOwnProps;

const SearchPanel: FC<Props> = () => {
  return <div className={styles.root}>SearchPanel:</div>;
};

export default SearchPanel;
