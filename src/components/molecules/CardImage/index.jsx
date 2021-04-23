import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import { StyledCard, Image, Subtitle } from './styles';

const CardImage = ({
  image,
  name,
  type
}) => {
  return (
    <StyledCard>
      <Image src={image} />
      <Subtitle>
        <Text
          text={name}
          color="white"
          size="large"
        />
        <Text
          text={type}
          color="white"
          size="tiny"
        />
      </Subtitle>
    </StyledCard>
  )
}

CardImage.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
};

export default CardImage;
