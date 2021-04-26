import React from 'react';
import PropTypes from 'prop-types';
import {StyledInput} from './styles';

const Input = ({
  id,
  type,
  name,
  placeholder,
  onChange,
  value,
  fontSize,
  fontWeight,
}) => (
  <StyledInput
    aria-label={placeholder}
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
    PropTypes.number,
  ]),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
};

Input.defaultProps = {
  id: 'input-id',
  type: 'text',
  name: 'input-name',
  placeholder: '',
  onChange: () => {},
  value: '',
  fontSize: 'small',
  fontWeight: 'normal',
};

export default Input;
