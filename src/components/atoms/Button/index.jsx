import React from 'react';
import PropTypes from 'prop-types';
import {StyledButton} from './styles';

const Button = ({
  label,
  id,
  name,
  disabled,
  onClick,
  fontSize,
  fontWeight,
}) => (
  <StyledButton
    aria-label={label}
    id={id}
    name={name}
    disabled={disabled}
    onClick={onClick}
    fontSize={fontSize}
    fontWeight={fontWeight}
  >
    {label}
  </StyledButton>
);

Button.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  label: '',
  id: 'button-id',
  name: 'button-name',
  onClick: () => {},
  fontSize: 'small',
  fontWeight: 'normal',
  disabled: false,
};

export default Button;
