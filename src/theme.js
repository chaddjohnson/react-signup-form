import { css } from '@emotion/core';
import { lighten, darken } from './utilities/color';

const spacing = 0.5;

// Reference: https://cdn.dribbble.com/users/1318796/screenshots/10584866/frame_6.png
const colors = {
  primary: '#2BFEA7',
  secondary: '#E33371',
  text: {
    primary: '#FFFFFF',
    secondary: '#757A83',
    tertiary: '#313742'
  },
  background: {
    default: '#424957',
    paper: '#171E2E'
  },
  buttons: {
    default: {
      default: '#4C5663',
      hover: lighten('#4C5663', 0.2),
      active: lighten('#4C5663', 0.1),
      disabled: lighten('#4C5663', 0.5)
    },
    primary: {
      default: '#2BFEA7',
      hover: darken('#2BFEA7', 0.2),
      active: darken('#2BFEA7', 0.1),
      disabled: darken('#2BFEA7', 0.5)
    }
  }
};

const font = {
  family: 'Muli',
  size: 1.05,
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700
  }
};

// Based on Bootstrap 4.
const breakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

// Reference: https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/
const breakpoint = Object.keys(breakpoints).reduce(
  (map, label) => ({
    ...map,
    [label]: (...args) => css`
      @media screen and (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `
  }),
  {}
);

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css?family=Muli:300,400,500,700');

  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    color: ${colors.text.primary};
    background: ${colors.background.default};
    font-family: ${font.family};
    font-size: ${font.size}rem;
  }

  a {
    color: ${colors.secondary};
    text-decoration: none;
  }

  a:hover, a:active {
    text-decoration: underline;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

export default {
  spacing,
  colors,
  font,
  breakpoint
};
