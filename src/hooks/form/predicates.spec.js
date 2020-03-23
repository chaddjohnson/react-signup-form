import * as predicates from './predicates';

test('isEmpty returns true for an empty string', () => {
  expect(predicates.isEmpty('')).toBe(true);
});

test('isEmpty returns false for a non-empty string', () => {
  expect(predicates.isEmpty('test string')).toBe(false);
});

test('notEmpty returns false for a non-empty string', () => {
  expect(predicates.notEmpty('test string')).toBe(false);
});

test('notEmpty returns true for an empty string', () => {
  expect(predicates.notEmpty('')).toBe(true);
});

test('lengthMoreThan returns true for a string having a length greater than a specified length', () => {
  expect(predicates.lengthMoreThan(5)('test string')).toBe(true);
});

test('lengthMoreThan returns false for a string having a length less than a specified length', () => {
  expect(predicates.lengthMoreThan(20)('test string')).toBe(false);
});

test('lengthLessThan returns true for a string having a length less than a specified length', () => {
  expect(predicates.lengthLessThan(20)('test string')).toBe(true);
});

test('lengthLessThan returns false for a string having a length greater than a specified length', () => {
  expect(predicates.lengthLessThan(5)('test string')).toBe(false);
});
