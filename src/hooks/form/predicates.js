export const isEmpty = value => {
  return value === null || value === undefined || value.length === 0;
};

export const notEmpty = value => {
  // True (indicating error) if empty.
  return isEmpty(value);
};

export const lengthMoreThan = length => value => {
  // True (indicating error) if value length exceeds length.
  return value.length > length;
};

export const lengthLessThan = length => value => {
  // True (indicating error) if value length is less than length.
  return value.length < length;
};
