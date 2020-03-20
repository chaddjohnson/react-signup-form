import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  id,
  type,
  label,
  placeholder,
  autocomplete,
  autoFocus
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      autoComplete={autocomplete}
      autoFocus={autoFocus}
    />
  </div>
);

TextField.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool
};

TextField.defaultProps = {
  type: 'text',
  autoComplete: true,
  autoFocus: false
};

export default TextField;
