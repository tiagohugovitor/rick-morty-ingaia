import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({
  label,
  id,
  name,
  disabled,
  onClick
}) => {
  return (
    <StyledButton
      id={id}
      name={name}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;