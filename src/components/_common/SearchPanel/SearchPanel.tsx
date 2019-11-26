import React, { FC } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
// import styles from './SearchPanel.module.scss';

interface IOwnProps {}

type Props = IOwnProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const SearchPanel: FC<any> = () => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <i className="material-icons">search</i>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchPanel;
