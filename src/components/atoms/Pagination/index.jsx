import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import MaterialPagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .Mui-selected': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  },
}));

const Pagination = ({
  page,
  pages,
  onChangePage,
}) => {
  const classes = useStyles();

  return (
    <MaterialPagination
      color="primary"
      className={classes.root}
      count={pages}
      onChange={onChangePage}
      page={page}
    />
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  pages: PropTypes.number,
  onChangePage: PropTypes.func,
};

Pagination.defaultProps = {
  page: 1,
  pages: 1,
  onChangePage: () => {},
};

export default Pagination;
