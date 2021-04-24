import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import { CardContainer, Image, Subtitle } from './styles';

const CharacterCard = ({
  characterName,
  characterType
}) => {
  return (
    <CardContainer>
      <Image />
      <Subtitle>
        <Text
          text={characterName}
          color="white"
          size="large"
        />
        <Text
          text={characterType}
          color="white"
          size="tiny"
        />
      </Subtitle>
    </CardContainer>
  )
}

CharacterCard.propTypes = {
  characterName: PropTypes.string,
  characterType: PropTypes.string
}

export default CharacterCard;
