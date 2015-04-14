(function() {
  'use strict';
  describe("Array addition", function() {
    it('should return false for [1, -1 , 10, 4]', function() {
      expect(arrayAddition([1, -1, 10, 4])).toBeFalsy();
    });

    it('should return false for [4, 9, 2, 44]', function() {
      expect(arrayAddition([4, 9, 2, 44])).toBeFalsy();
    });

    it('should return true for [10, 2, 1, 4, 6]', function() {
      expect(arrayAddition([10, 2, 1, 4, 6])).toBeTruthy();
    });

    it('should return true for [44, -1, 22, 3, 10, 9 , 1]', function() {
      expect(arrayAddition([44, -1, 22, 3, 10, 9, 1])).toBeTruthy();
    });

    it('should return true for [23, 10, 4, 3, 1, 6]', function() {
      expect(arrayAddition([23, 10, 4, 3, 1, 6])).toBeTruthy();
    });

  });
})();
