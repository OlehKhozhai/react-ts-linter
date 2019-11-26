import React, { FC } from 'react';
import TablePagination from '@material-ui/core/TablePagination';

import styles from 'components/Drivers/FooterPagination/FooterPagination.module.scss';

interface IOwnProps {}

type Props = IOwnProps;

const FooterPagination: FC<Props> = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={30}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      className={styles.root}
      labelRowsPerPage="Showing 1 - 50"
    />
  );
};

export default FooterPagination;
