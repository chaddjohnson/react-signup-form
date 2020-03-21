import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { lighten, darken } from '../utilities/color';

const colorStyles = props => {
  let textColor = '';
  let rules = {};

  if (props.primary) {
    textColor = props.disabled
      ? lighten(props.theme.colors.background.default, 0.2)
      : props.theme.colors.background.default;
    rules = props.theme.colors.buttons.primary;
  } else if (props.default) {
    textColor = props.disabled
      ? darken(props.theme.colors.text.primary, 0.2)
      : darken(props.theme.colors.text.primary, 0.1);
    rules = props.theme.colors.buttons.default;
  }

  return css`
    color: ${props.disabled ? darken(textColor, 0.2) : textColor};
    background-color: ${props.disabled ? rules.disabled : rules.default};
    &:hover {
      background-color: ${props.disabled ? rules.disabled : rules.hover};
    }
    &:active {
      background-color: ${props.disabled ? rules.disabled : rules.active};
    }
  `;
};

const Button = styled(({ className, disabled, children, onClick }) => (
  <button className={className} disabled={disabled} onClick={onClick}>
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
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  default: PropTypes.bool,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
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
  disabled: false,
  fullWidth: false,
  onClick: () => {}
};

export default Button;
