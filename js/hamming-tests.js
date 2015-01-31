'use strict';

describe('Hamming: ', function() {

  describe('Case for identical strands', function () {

    it('should return 0 for identical strands', function() {
      expect(compute('A', 'A')).toEqual(0);
    });

  });

  describe('Case for single, non-identical strands', function () {

    it('should return 1 for single, non-identical strands', function() {
      expect(compute('A', 'G')).toEqual(1);
    });

  });

  describe('Case for small strands', function () {

    it('should return the complete hamming distance for a small strand', function () {
      expect(compute('AG', 'CT')).toEqual(2);
    });

    it('should return a small hamming distance', function () {
      expect(compute('AT', 'CT')).toEqual(1);
    });

  });

  describe('Case for longer strands', function () {

    it('should return a small hamming distance', function () {
      expect(compute('GGACG', 'GGTCG')).toEqual(1);
    });

    it('should return a large hamming distance', function () {
      expect(compute('GATACA', 'GCATAA')).toEqual(4);
    });

    it('should return the hamming distance in a very long strand', function () {
      expect(compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9);
    });

  });

  describe('Case for strands of unequal length', function () {

    it('throws an error when strands are not of equal length', function () {
      expect(function () { compute('GGACGGATTCTG', 'AGGAC'); }).toThrow(new Error('DNA strands must be of equal length.'));
    });

  });

});
