import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../../molecules/SearchBar';
import { Logo, StyledSearchBar, HeaderContent } from './styles';

const HomeHeader = ({
  onChange,
  onClick,
  value
}) => {
  return (
    <HeaderContent>
      <Logo src="../../../../assets/logo.svg"/>
      <StyledSearchBar>
        <SearchBar
          onChange={onChange}
          onClick={onClick}
          value={value}
        />
      </StyledSearchBar>
    </HeaderContent>
  )
};

HomeHeader.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string
};

export default HomeHeader;
