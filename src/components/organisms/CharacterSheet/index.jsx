import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Button from '../../atoms/Button';
import SheetImage from '../../molecules/SheetImage';
import CharacterCard from '../../molecules/CharacterCard';
import CharacterDecription from '../../molecules/CharacterDescription';
import LocationDescription from '../../molecules/LocationDescription';
import { SheetContainerDesktop, StyledCharacterCard, ImageBackground, StyledCloseIcon, DescriptionBackground, ColorFilter, ImageContent, Content, SheetContainerMobile } from './styles';

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

  const renderSheetDesktop = () => (
    <SheetContainerDesktop>
      <ImageContent>
        <ImageBackground
          image={image}
        />
        <ColorFilter />
        <Content>
          <Button
            label="Close"
            id="close-button"
            name="close-button"
            disabled={false}
            onClick={onClose}
            fontSize="mediumSmall"
            fontWeight="bold"
          />
          <SheetImage
            image={image}
            name={characterName}
            type={characterType}
          />
        </Content>
      </ImageContent>
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
    </SheetContainerDesktop>
  );

  const renderSheetMobile = () => (
    <SheetContainerMobile>
      <ImageContent>
        <ImageBackground
          image={image}
        />
        <ColorFilter />
        <Content>
          <StyledCloseIcon onClick={onClose}>
            <CloseIcon fontSize="large" />
          </StyledCloseIcon>
          <StyledCharacterCard>
            <CharacterCard
              characterName={characterName}
              characterType={characterType}
              characterImage={image}
              isMiniCard={true}
              onClickCard={() => { }}
              isSelected={false}
            />
          </StyledCharacterCard>
        </Content>
      </ImageContent>
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
    </SheetContainerMobile>
  );

  return (
    <>
      {renderSheetDesktop()}
      {renderSheetMobile()}
    </>
  )
};

CharacterSheet.propTypes = {
  onClose: PropTypes.func,
  characterName: PropTypes.string,
  characterType: PropTypes.string,
  image: PropTypes.string,
  characterDescription: PropTypes.string,
  originType: PropTypes.string,
  originName: PropTypes.string,
  originSubtitle: PropTypes.string,
  originResidents: PropTypes.number,
  locationType: PropTypes.string,
  locationName: PropTypes.string,
  locationSubtitle: PropTypes.string,
  locationResidents: PropTypes.string
}

export default CharacterSheet;
