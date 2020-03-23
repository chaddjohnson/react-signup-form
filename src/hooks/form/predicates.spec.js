import * as predicates from './predicates';

describe('predicates', () => {
  describe('isEmpty', () => {
    it('should return true for an empty string', () => {
      const result = predicates.isEmpty('');
      expect(result).toBe(true);
    });

    it('should return false for a non-empty string', () => {
      const result = predicates.isEmpty('test string');
      expect(result).toBe(false);
    });
  });

  describe('notEmpty', () => {
    it('should return false for a non-empty string', () => {
      const result = predicates.notEmpty('test string');
      expect(result).toBe(false);
    });

    it('should return true for an empty string', () => {
      const result = predicates.notEmpty('');
      expect(result).toBe(true);
    });
  });

  describe('lengthMoreThan', () => {
    it('should return true for a string having a length greater than a specified length', () => {
      const result = predicates.lengthMoreThan(5)('test string');
      expect(result).toBe(true);
    });

    it('should return false for a string having a length less than a specified length', () => {
      const result = predicates.lengthMoreThan(20)('test string');
      expect(result).toBe(false);
    });
  });

  describe('lengthLessThan', () => {
    it('should return true for a string having a length less than a specified length', () => {
      const result = predicates.lengthLessThan(20)('test string');
      expect(result).toBe(true);
    });

    it('should return false for a string having a length greater than a specified length', () => {
      const result = predicates.lengthLessThan(5)('test string');
      expect(result).toBe(false);
    });
  });
});
