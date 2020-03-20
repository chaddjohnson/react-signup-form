import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ fullWidth, children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  fullWidth: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'button',
  fullWidth: false,
  onClick: () => {}
};

export default Button;
