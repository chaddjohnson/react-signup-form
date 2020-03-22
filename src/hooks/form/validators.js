import * as predicates from './predicates';

export const notEmpty = errorMessage => value => {
  if (!predicates.notEmpty(value)) {
    return errorMessage;
  }
};
