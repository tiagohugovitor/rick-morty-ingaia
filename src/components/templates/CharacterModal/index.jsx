import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../../organisms/CharacterCard';

const CharacterModal = ({
  onClose,
  characterName,
  characterType,
  image,
  characterDescription,
  originType,
  originName,
  originSubtitle,
  originResidents,
  locationType,
  locationName,
  locationSubtitle,
  locationResidents
}) => {
  return (
    <CharacterCard
      onClose={onClose}
      characterName={characterName}
      characterType={characterType}
      image={image}
      characterDescription={characterDescription}
      originType={originType}
      originName={originName}
      originSubtitle={originSubtitle}
      originResidents={originResidents}
      locationType={locationType}
      locationName={locationName}
      locationSubtitle={locationSubtitle}
      locationResidents={locationResidents}
    />
  )
}

CharacterModal.propTypes = {
  onClose: PropTypes.func,
  characterName: PropTypes.string,
  characterType: PropTypes.string,
  image: PropTypes.string,
  characterDescription: PropTypes.string,
  originType: PropTypes.string,
  originName: PropTypes.string,
  originSubtitle: PropTypes.string,
  originResidents: PropTypes.string,
  locationType: PropTypes.string,
  locationName: PropTypes.string,
  locationSubtitle: PropTypes.string,
  locationResidents: PropTypes.string
};

export default CharacterModal;
