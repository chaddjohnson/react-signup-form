import color from 'color';

export const lighten = (value, percentage) => {
  if (!value) {
    throw new Error('No value provided to lighten()');
  }
  if (!percentage) {
    throw new Error('No percentage provided to lighten()');
  }

  return color(value)
    .lighten(percentage)
    .hex();
};

export const darken = (value, percentage) => {
  if (!value) {
    throw new Error('No value provided to darken()');
  }
  if (!percentage) {
    throw new Error('No percentage provided to darken()');
  }

  return color(value)
    .darken(percentage)
    .hex();
};
