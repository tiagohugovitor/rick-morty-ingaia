import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import {SearchBarContent, SearchBarInput, SearchBarButton} from './styles';

const SearchBar = ({
  onChange,
  onClick,
  value,
}) => {
  return (
    <SearchBarContent>
      <SearchBarInput>
        <Input
          id="search-bar-input"
          type="text"
          name="search-characters-input"
          placeholder="Search characters"
          onChange={onChange}
          value={value}
          fontSize="mediumSmall"
          fontWeight="bold"
        />
      </SearchBarInput>
      <SearchBarButton>
        <Button
          label="Search"
          id="search-bar-button"
          name="search-characters-button"
          disabled={false}
          onClick={onClick}
          fontSize="mediumSmall"
          fontWeight="bold"
        />
      </SearchBarButton>
    </SearchBarContent>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default SearchBar;
