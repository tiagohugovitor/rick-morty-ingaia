import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './styles';

const Text = ({
  text,
  color,
  size,
}) => {
  return (
    <StyledText
      color={color}
      size={size}
    >
      {text}
    </StyledText>
  )
};

Text.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
}

export default Text;
