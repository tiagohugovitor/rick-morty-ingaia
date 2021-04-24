import React from 'react';
import PropTypes from 'prop-types';
import MaterialPagination from '@material-ui/lab/Pagination';

const Pagination = ({
  page,
  pages,
  onChangePage
}) => {
  return (
    <MaterialPagination
      color="primary"
      //classes
      count={pages}
      onChange={onChangePage}
      page={page}
    />
  )
}

Pagination.propTypes = {
  page: PropTypes.number,
  pages: PropTypes.number,
  onChangePage: PropTypes.func
}

export default Pagination;
