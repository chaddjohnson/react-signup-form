import * as validators from '../validators';

const errorMessage = 'error message';

describe('validators', () => {
  describe('notEmpty', () => {
    it('should return undefined for a non-empty string', () => {
      const result = validators.notEmpty(errorMessage)('test string');
      expect(result).toBe(undefined);
    });

    it('should return an error message for an empty string', () => {
      const result = validators.notEmpty(errorMessage)('');
      expect(result).toBe(errorMessage);
    });
  });

  describe('lengthMoreThan', () => {
    it('should return an error message for a string having a length greater than the required length', () => {
      const result = validators.lengthMoreThan(2, errorMessage)('test string');
      expect(result).toBe(errorMessage);
    });

    it('should return undefined for a string having a length less than the required length', () => {
      const result = validators.lengthMoreThan(20, errorMessage)('test string');
      expect(result).toBe(undefined);
    });
  });

  describe('lengthLessThan', () => {
    it('should return an error message for a string having a length less than the minimum length', () => {
      const result = validators.lengthMoreThan(5, errorMessage)('test string');
      expect(result).toBe(errorMessage);
    });

    it('should return undefined for a string having a length greater than the minimum length', () => {
      const result = validators.lengthMoreThan(20, errorMessage)('test string');
      expect(result).toBe(undefined);
    });
  });
});
