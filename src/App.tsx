import React, { FC } from 'react';
import Header from 'components/_common/Header/Header';
import Aside from 'components/_common/Aside/Aside';
// import styles from './.module.scss';

interface IProps {}

const App: FC<IProps> = () => {
  return (
    <>
      <h1>App</h1>
      <Header />
      <Aside />
    </>
  );
};

export default App;
