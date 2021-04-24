import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import { StyledCard, Image, Subtitle, Content } from './styles';

const SheetImage = ({
  image,
  name,
  type
}) => {
  return (
    <StyledCard>
      <Content>
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
      </Content>
    </StyledCard>
  )
}

SheetImage.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
};

export default SheetImage;
