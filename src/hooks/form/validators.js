import * as predicates from './predicates';

export const notEmpty = errorMessage => value => {
  if (!predicates.notEmpty(value)) {
    return errorMessage;
  }
};

export const matches = errorMessage => (valueA, valueB) => {
  if (!predicates.matches(valueA, valueB)) {
    return errorMessage;
  }
};
