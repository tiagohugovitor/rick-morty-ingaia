import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../../molecules/CharacterCard';
import { StyledList, StyledCharacterCard } from './styles';

const CharactersList = ({
  characters,
  onClickCard
}) => {
  return (
    <StyledList>
      {characters.map(character => (
        <StyledCharacterCard
          key={character.id}
        >
          <CharacterCard
            onClickCard={() => onClickCard(character)}
            characterName={character?.name}
            characterType={character?.species}
            characterImage={character?.image}
            isSelected={false}
          />
        </StyledCharacterCard>
      ))}
    </StyledList>
  )
};

CharactersList.propTypes = {
  characters: PropTypes.array,
  onClickCard: PropTypes.func
};

export default CharactersList;
