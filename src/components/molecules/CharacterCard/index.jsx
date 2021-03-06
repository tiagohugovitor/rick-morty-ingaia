import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import {
  CardContainer, Image, Subtitle, StyledName, StyledSpecie,
} from './styles';

const CharacterCard = ({
  characterName,
  characterType,
  characterImage,
  onClickCard,
  isSelected,
  isMiniCard,
}) => {
  return (
    <CardContainer
      onClick={onClickCard}
      selected={isSelected ? 'true' : 'false'}
      isMiniCard={isMiniCard ? 'true' : 'false'}
    >
      <Image alt={`${characterName} image`} src={characterImage} isMiniCard={isMiniCard ? 'true' : 'false'} />
      <Subtitle >
        <StyledName>
          <Text
            text={characterName}
            color="white"
            size="large"
            fontWeight="bold"
          />
        </StyledName>
        <StyledSpecie>
          <Text
            text={characterType}
            color="white"
            size="mini"
            fontWeight="normal"
          />
        </StyledSpecie>
      </Subtitle>
    </CardContainer>
  );
};

CharacterCard.propTypes = {
  characterName: PropTypes.string,
  characterType: PropTypes.string,
  characterImage: PropTypes.string,
  onClickCard: PropTypes.func,
  isSelected: PropTypes.bool,
  isMiniCard: PropTypes.bool,
};

export default CharacterCard;
