import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Button = ({ className, fullWidth, children, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.colors.buttons.active};
  color: ${props => props.theme.colors.background.default};
  border: none;
  padding: ${props => props.theme.spacing * 1.2}rem
    ${props => props.theme.spacing * 1.5}rem;
  font-size: ${props => props.theme.font.size}rem;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
`;

StyledButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  fullWidth: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func
};

StyledButton.defaultProps = {
  type: 'button',
  fullWidth: false,
  onClick: () => {}
};

export default StyledButton;
