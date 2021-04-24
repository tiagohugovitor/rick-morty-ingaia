import React from 'react';
import PropTypes from 'prop-types';
import HomeHeader from '../../organisms/HomeHeader';
import CharactersList from '../../organisms/CharactersList';
import { HomeContainer, StyledHomeHeader, StyledHomeContent } from './styles';

const HomeTemplate = ({
  onChange,
  onClick,
  value,
  searchResult
}) => {

  const hasContent = () => !!searchResult?.length;
  
  return (
    <HomeContainer>
      <StyledHomeHeader>
        <HomeHeader
          onChange={onChange}
          onClick={onClick}
          value={value}
        />
      </StyledHomeHeader>
      <StyledHomeContent>
        {hasContent() && (
          <CharactersList
            characters={searchResult}
          />
        )}
      </StyledHomeContent>
    </HomeContainer>
  )
}

HomeTemplate.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string,
  searchResult: PropTypes.array
}

export default HomeTemplate;
