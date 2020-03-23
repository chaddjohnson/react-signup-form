import * as predicates from './predicates';

describe('predicates', () => {
  test('isEmpty should return true for an empty string', () => {
    const result = predicates.isEmpty('');
    expect(result).toBe(true);
  });

  test('isEmpty should return false for a non-empty string', () => {
    const result = predicates.isEmpty('test string');
    expect(result).toBe(false);
  });

  test('notEmpty should return false for a non-empty string', () => {
    const result = predicates.notEmpty('test string');
    expect(result).toBe(false);
  });

  test('notEmpty should return true for an empty string', () => {
    const result = predicates.notEmpty('');
    expect(result).toBe(true);
  });

  test('lengthMoreThan should return true for a string having a length greater than a specified length', () => {
    const result = predicates.lengthMoreThan(5)('test string');
    expect(result).toBe(true);
  });

  test('lengthMoreThan should return false for a string having a length less than a specified length', () => {
    const result = predicates.lengthMoreThan(20)('test string');
    expect(result).toBe(false);
  });

  test('lengthLessThan should return true for a string having a length less than a specified length', () => {
    const result = predicates.lengthLessThan(20)('test string');
    expect(result).toBe(true);
  });

  test('lengthLessThan should return false for a string having a length greater than a specified length', () => {
    const result = predicates.lengthLessThan(5)('test string');
    expect(result).toBe(false);
  });
});
