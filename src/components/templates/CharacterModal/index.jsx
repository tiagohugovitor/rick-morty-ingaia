import React from 'react';
import PropTypes from 'prop-types';
import CharacterSheet from '../../organisms/CharacterSheet';

const CharacterModal = ({
  closeModal,
  character
}) => {

  return (
    <CharacterSheet
      onClose={closeModal}
      characterName={character?.name}
      characterType={character?.species}
      image={character?.image}
      characterDescription={character?.description}
      originType={character?.origin?.type || "Unknown Planet"}
      originName={character?.origin?.name || "Unknown"}
      originSubtitle={character?.origin?.dimension || "Unknown dimension"}
      originResidents={character?.origin?.residents?.length}
      locationType={character?.location?.type || "Unknown Planet"}
      locationName={character?.location?.name || "Unknown"}
      locationSubtitle={character?.location?.dimension || "Unknown dimension"}
      locationResidents={character?.location?.residents?.length}
    />
  )
}

CharacterModal.propTypes = {
  onClose: PropTypes.func,
  character: PropTypes.object
};

export default CharacterModal;
