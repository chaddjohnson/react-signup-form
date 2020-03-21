import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing / 2}rem;
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing * 2}rem;
  color: ${props => props.theme.colors.text.secondary};
  background-color: #252933;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: ${props => props.theme.font.size}rem;
`;

const TextField = ({ id, type, label, placeholder, autoFocus }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  </div>
);

TextField.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool
};

TextField.defaultProps = {
  type: 'text',
  autoFocus: false
};

export default TextField;
