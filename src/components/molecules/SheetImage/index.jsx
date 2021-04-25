import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import { StyledCard, Image, Subtitle, Content, StyledSpecie, StyledName } from './styles';

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
          <StyledName>
            <Text
              text={name}
              color="white"
              size="large"
              fontWeight="bold"
            />
          </StyledName>
          <StyledSpecie>
            <Text
              text={type}
              color="white"
              size="mini"
              fontWeight="normal"
            />
          </StyledSpecie>
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
