import React from 'react';
import PropTypes from 'prop-types';
import {StyledText} from './styles';

const Text = ({
  text,
  color,
  size,
  fontWeight,
}) => {
  return (
    <StyledText
      color={color}
      size={size}
      fontWeight={fontWeight}
    >
      {text}
    </StyledText>
  );
};

Text.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  fontWeight: PropTypes.string,
};

Text.defaultProps = {
  text: '',
  color: 'white',
  size: 'small',
  fontWeight: 'normal',
};

export default Text;
