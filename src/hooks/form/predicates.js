export const isEmpty = value => {
  return value === null || value === undefined || value.length === 0;
};

export const notEmpty = value => {
  return !isEmpty(value);
};
