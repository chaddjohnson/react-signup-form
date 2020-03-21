import { css } from '@emotion/core';

const spacing = 0.5;

// Reference: https://cdn.dribbble.com/users/1318796/screenshots/10584866/frame_6.png
const colors = {
  primary: '#22FF93',
  secondary: '#E33371',
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.7)'
  },
  background: {
    default: '#333846',
    paper: '#121623'
  },
  buttons: {
    active: '#22FF93',
    hover: '#00552B',
    selected: '#008846'
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
