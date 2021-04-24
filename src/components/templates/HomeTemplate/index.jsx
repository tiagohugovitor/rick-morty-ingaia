import React from 'react';
import PropTypes from 'prop-types';
import HomeHeader from '../../organisms/HomeHeader';
import CharactersList from '../../organisms/CharactersList';
import { HomeContainer, StyledHomeHeader, StyledHomeContent } from './styles';

const HomeTemplate = ({
  onChange,
  onClickSearch,
  value,
  searchResult,
  onClickCard,
  loading
}) => {

  const hasContent = () => !!searchResult?.length;
  
  return (
    <HomeContainer
      loading={loading}
    >
      <StyledHomeHeader>
        <HomeHeader
          onChange={onChange}
          onClick={onClickSearch}
          value={value}
        />
      </StyledHomeHeader>
      <StyledHomeContent>
        {hasContent() && (
          <CharactersList
            onClickCard={onClickCard}
            characters={searchResult}
          />
        )}
      </StyledHomeContent>
    </HomeContainer>
  )
}

HomeTemplate.propTypes = {
  onChange: PropTypes.func,
  onClickSearch: PropTypes.func,
  value: PropTypes.string,
  searchResult: PropTypes.array,
  onClickCard: PropTypes.func,
  loading: PropTypes. bool
}

export default HomeTemplate;
