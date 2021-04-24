import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../../molecules/CharacterCard';
import { StyledList, StyledCharacterCard } from './styles';

const CharactersList = ({
  characters
}) => {
  return (
    <StyledList>
      {characters.map(character => (
        <StyledCharacterCard
          key={character.id}
        >
          <CharacterCard
            characterName={character?.name}
            characterType={character?.species}
          />
        </StyledCharacterCard>
      ))}
    </StyledList>
  )
};

CharactersList.propTypes = {
  characters: PropTypes.array
};

export default CharactersList;
