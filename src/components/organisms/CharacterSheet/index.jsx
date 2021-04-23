import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import SheetImage from '../../molecules/SheetImage';
import CharacterDecription from '../../molecules/CharacterDescription';
import LocationDescription from '../../molecules/LocationDescription';
import { SheetContainer, ImageBackground, DescriptionBackground } from './styles';

const CharacterSheet = ({
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
    <SheetContainer>
      <ImageBackground>
        <Button 
          label="Close"
          id="close-button"
          name="close-button"
          disabled={false}
          onClick={onClose}
        />
        <SheetImage 
          image={image}
          name={characterName}
          type={characterType}
        />
      </ImageBackground>
      <DescriptionBackground>
        <CharacterDecription 
          title="ABOUT"
          characterDescription={characterDescription}
        />
        <LocationDescription 
          title="ORIGIN"
          locationType={originType}
          locationName={originName}
          locationSubtitle={originSubtitle}
          locationResidents={originResidents}
        />
        <LocationDescription 
          title="LOCATION"
          locationType={locationType}
          locationName={locationName}
          locationSubtitle={locationSubtitle}
          locationResidents={locationResidents}
        />
      </DescriptionBackground>
    </SheetContainer>
  )
}

CharacterSheet.propTypes = {
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
}

export default CharacterSheet;
