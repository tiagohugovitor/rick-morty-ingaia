import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useLazyQuery} from '@apollo/react-hooks';
import withModal from '../../components/atoms/Modal';
import Loading from '../../components/molecules/Loading';
import CharacterModal from '../../components/templates/CharacterModal';
import HomeTemplate from '../../components/templates/HomeTemplate';
import {listCharacters} from '../../services/characters.js';
import {descriptionCreator} from '../../utils/descriptionCreator.js';

const Home = ({
  showModal,
}) => {
  const [searchCharacters, setSearchCharacters] = useState('');
  const [emptyResult, setEmptyResult] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    pages: 0,
  });
  const [runQuery, {data, loading}] = useLazyQuery(
      listCharacters,
      {errorPolicy: 'all'},
  );

  useEffect(() => {
    const newPages = data?.characters?.info.pages;
    const results = data?.characters;
    if (newPages !== pagination.pages) {
      setPagination((state) => ({...state, pages: newPages}));
    }
    data && !results ? setEmptyResult(true) : setEmptyResult(false);
  }, [data, pagination.pages]);

  const onSearch = (newPage, filter) => {
    setPagination((state) => ({...state, page: newPage}));
    runQuery({
      variables: {page: newPage, filter: {name: filter}},
    });
  };

  const createDescription = (character) => {
    const description = `${character.name}
     ${descriptionCreator[character.status]?.verb}
     a ${character?.gender.toLowerCase()} ${character?.species.toLowerCase()}.
     ${descriptionCreator[character.gender]?.pronoum}
     ${descriptionCreator[character.status]?.status}.
     Last seen in
     ${character?.episode[character?.episode.length - 1]?.air_date}.`;
    console.log(description);
    return description;
  };

  const openCharacterSheetModal = (character) => {
    const nemCharacter = {
      ...character,
      description: createDescription(character),
    };
    showModal({
      body: CharacterModal,
      bodyProps: {
        character: nemCharacter,
      },
    });
  };

  const onChangePage = (ev, newPage) => {
    onSearch(newPage, searchCharacters);
  };

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
        emptyResult={emptyResult}
        page={pagination.page}
        pages={pagination.pages}
        onChangePage={onChangePage}
      />
    </>
  );
};

Home.propTypes = {
  showModal: PropTypes.func,
};

export default (withModal(Home));
