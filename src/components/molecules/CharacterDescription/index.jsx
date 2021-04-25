import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import {CharacterContainer, Subtitle, Title} from './styles';

const CharacterDecription = ({
  title,
  characterDescription,
}) => {
  return (
    <CharacterContainer>
      <Title>
        <Text
          text={title}
          color="tertiary"
          size="tiny"
          fontWeight="normal"
        />
      </Title>
      <Subtitle>
        <Text
          text={characterDescription}
          color="grey"
          size="mediumSmall"
          fontWeight="normal"
        />
      </Subtitle>
    </CharacterContainer>
  );
};

CharacterDecription.propTypes = {
  title: PropTypes.string,
  characterDescription: PropTypes.string,
};

export default CharacterDecription;
