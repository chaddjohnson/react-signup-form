import React from 'react';
import PropTypes from 'prop-types';

const FormLayout = ({ children }) => {
  return <div>{children}</div>;
};

FormLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default FormLayout;
