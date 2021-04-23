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
}) => {
  return (
    <StyledInput
      id={id}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  )
}

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
}

export default Input;