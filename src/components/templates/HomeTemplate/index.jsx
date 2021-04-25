import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../atoms/Pagination';
import HomeHeader from '../../organisms/HomeHeader';
import CharactersList from '../../organisms/CharactersList';
import {HomeContainer, StyledHomeContent, StyledPagination} from './styles';

const HomeTemplate = ({
  onChange,
  onClickSearch,
  value,
  searchResult,
  onClickCard,
  loading,
  page,
  pages,
  onChangePage,
}) => {
  const hasContent = () => !!searchResult?.length;

  return (
    <HomeContainer
      loading={loading ? 'true' : 'false'}
    >
      <HomeHeader
        onChange={onChange}
        onClick={onClickSearch}
        value={value}
      />
      <StyledHomeContent>
        {hasContent() && (
          <>
            <CharactersList
              onClickCard={onClickCard}
              characters={searchResult}
            />
            <StyledPagination>
              <Pagination
                page={page}
                pages={pages}
                onChangePage={onChangePage}
              />
            </StyledPagination>
          </>
        )}
      </StyledHomeContent>
    </HomeContainer>
  );
};

HomeTemplate.propTypes = {
  onChange: PropTypes.func,
  onClickSearch: PropTypes.func,
  value: PropTypes.string,
  searchResult: PropTypes.array,
  onClickCard: PropTypes.func,
  loading: PropTypes.bool,
  page: PropTypes.number,
  pages: PropTypes.number,
  onChangePage: PropTypes.func,
};

export default HomeTemplate;