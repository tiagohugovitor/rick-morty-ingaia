import React, { useState } from 'react';
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
    page: 0,
    count: 0
  });
  const [runQuery, { data, loading, error }] = useLazyQuery(listCharacters);

  const onSearch = () => {
    runQuery({
      variables: { page: pagination.page, filter: { name: searchCharacters } }
    })
  }

  const openCharacterSheetModal = character => {
    showModal({
      body: CharacterModal,
      bodyProps: {
        character: character
      }
    })
  }

  return (
    <>
      {loading && <Loading />}
      <HomeTemplate
        loading={loading}
        onChange={setSearchCharacters}
        onClickSearch={onSearch}
        onClickCard={openCharacterSheetModal}
        value={searchCharacters}
        searchResult={data?.characters?.results || []}
      />
    </>
  )
}

Home.propTypes = {
  showModal: PropTypes.func
};

export default (withModal(Home));
