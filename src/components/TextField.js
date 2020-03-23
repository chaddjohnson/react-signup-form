import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing}rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing * 2}rem;
  color: ${props => props.theme.colors.text.primary};
  background-color: ${props => props.theme.colors.text.tertiary};
  border-color: ${props =>
    props.error ? props.theme.colors.error : props.theme.colors.text.tertiary};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  font-size: ${props => props.theme.font.size}rem;
`;

const StyledError = styled.div`
  color: ${props => props.theme.colors.error};
  margin-top: ${props => props.theme.spacing}rem;
`;

const TextField = ({
  id,
  name,
  type,
  label,
  placeholder,
  error,
  autoFocus,
  minLength,
  maxLength,
  value,
  onChange,
  onBlur
}) => (
  <>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInput
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      autoFocus={autoFocus}
      minLength={minLength}
      maxLength={maxLength}
      value={value}
      error={error}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <StyledError>{error}</StyledError>}
  </>
);

TextField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  error: PropTypes.node,
  autoFocus: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

TextField.defaultProps = {
  type: 'text',
  autoFocus: false,
  onChange: () => {},
  onBlur: () => {}
};

export default TextField;
