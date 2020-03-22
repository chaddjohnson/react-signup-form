import * as predicates from './predicates';

const validator = predicate => errorMessage => input => {
  const hasError = predicate(input);

  if (hasError) {
    return errorMessage;
  }
};

export const notEmpty = errorMessage => {
  return validator(predicates.notEmpty)(errorMessage);
};

export const lengthMoreThan = (length, errorMessage) => {
  return validator(predicates.lengthMoreThan(length))(errorMessage);
};

export const lengthLessThan = (length, errorMessage) => {
  return validator(predicates.lengthLessThan(length))(errorMessage);
};
