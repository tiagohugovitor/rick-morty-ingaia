import React from 'react';
import PropTypes from 'prop-types';
import CharacterModal from '../../components/templates/CharacterModal';

const CharacterDetails = () => {

  const onClose = () => {

  }

  return (
    <CharacterModal
      onClose={onClose}
      characterName="Rick Sanchez"
      characterType="Human"
      image="../../../public/assets/rick-description.svg"
      characterDescription="Rick Sanchez is a male human. He is alive and well. Last seen in May 31, 2020."
      originType="Planet"
      originName="Earth (Replacement Dimension)"
      originSubtitle="Replacement Dimension"
      originResidents="54 residents"
      locationType="Planet"
      locationName="Earth (Replacement Dimension)"
      locationSubtitle="Replacement Dimension"
      locationResidents="54 residents"
    />
  )
}

CharacterDetails.propTypes = {

};

export default CharacterDetails;