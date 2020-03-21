import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const colorStyles = props => {
  let color = '';
  let rules = {};

  if (props.primary) {
    color = props.theme.colors.background.default;
    rules = props.theme.colors.buttons.primary;
  } else if (props.default) {
    color = props.theme.colors.text.primary;
    rules = props.theme.colors.buttons.default;
  }

  return css`
    color: ${color};
    background-color: ${rules.default};
    &:hover {
      background-color: ${rules.hover};
    }
    &:active {
      background-color: ${rules.active};
    }
  `;
};

const Button = styled(({ className, children, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
))`
  ${colorStyles};
  border: none;
  border-radius: 4px;
  padding: ${props => props.theme.spacing * 1.5}rem
    ${props => props.theme.spacing * 1.5}rem;
  font-size: ${props => props.theme.font.size}rem;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  cursor: pointer;
`;

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  default: PropTypes.bool,
  primary: PropTypes.bool,
  fullWidth: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'button',
  default: true,
  primary: false,
  fullWidth: false,
  onClick: () => {}
};

export default Button;
