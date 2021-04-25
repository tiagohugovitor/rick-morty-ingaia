import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';

const Input = ({
  id,
  type,
  name,
  placeholder,
  onChange,
  value,
  fontSize,
  fontWeight
}) => (
  <StyledInput
    id={id}
    type={type}
    name={name}
    onChange={(event) => onChange(event.target.value)}
    value={value}
    fontSize={fontSize}
    fontWeight={fontWeight}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string
}

export default Input;