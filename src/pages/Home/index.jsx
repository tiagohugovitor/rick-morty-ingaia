import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';
import withModal from '../../components/atoms/Modal';
import Loading from '../../components/molecules/Loading';
import CharacterModal from '../../components/templates/CharacterModal';
import HomeTemplate from '../../components/templates/HomeTemplate';
import { listCharacters } from '../../services/characters.js';

const Home = ({
  showModal,
}) => {

  const [searchCharacters, setSearchCharacters] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    pages: 0
  });
  const [runQuery, { data, loading, error }] = useLazyQuery(listCharacters);

  useEffect(() => {
    const newPages = data?.characters?.info.pages;
    if (newPages !== pagination.pages) {
      setPagination(state => ({ ...state, pages: newPages }))
    }
  }, [data]);

  const onSearch = (newPage, filter) => {
    setPagination(state => ({ ...state, page: newPage }));
    runQuery({
      variables: { page: newPage, filter: { name: filter } }
    });
  };

  const openCharacterSheetModal = character => {
    showModal({
      body: CharacterModal,
      bodyProps: {
        character: character
      }
    })
  }

  const onChangePage = (ev, newPage) => {
    onSearch(newPage, searchCharacters);
  }

  return (
    <>
      {loading && <Loading />}
      <HomeTemplate
        loading={loading}
        onChange={setSearchCharacters}
        onClickSearch={() => onSearch(1, searchCharacters)}
        onClickCard={openCharacterSheetModal}
        value={searchCharacters}
        searchResult={data?.characters?.results || []}
        page={pagination.page}
        pages={pagination.pages}
        onChangePage={onChangePage}
      />
    </>
  )
}

Home.propTypes = {
  showModal: PropTypes.func
};

export default (withModal(Home));
