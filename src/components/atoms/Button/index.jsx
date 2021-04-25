import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({
  label,
  id,
  name,
  disabled,
  onClick,
  fontSize,
  fontWeight
}) => {
  return (
    <StyledButton
      id={id}
      name={name}
      disabled={disabled}
      onClick={onClick}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {label}
    </StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string
}

export default Button;