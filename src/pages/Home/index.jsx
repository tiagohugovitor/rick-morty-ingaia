import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';
import HomeTemplate from '../../components/templates/HomeTemplate';
import { listCharacters } from '../../services/characters.js';

const Home = ({ }) => {

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

  return (
    <>
      {console.log("data", data)}
      <HomeTemplate
        onChange={setSearchCharacters}
        onClick={onSearch}
        value={searchCharacters}
        searchResult={data?.characters?.results || []}
      />
    </>
  )
}

Home.propTypes = {

};

export default Home;