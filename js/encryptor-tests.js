'use strict';

describe('Encryptor: ', function() {

  describe('Case for the Encryptor constructor.', function () {

    beforeEach(function () {
      this.Encryptor = Encryptor;
      this.encryptor = new this.Encryptor(13);
    });

    afterEach(function () {
      this.Encryptor = undefined;
      this.encryptor = undefined;
    });

    it('the encryptor should be an instanceof the Encryptor class.', function () {
      expect(this.encryptor instanceof Encryptor).toBe(true);
    });

    it('the encryptor should have a coefficient.', function () {
      expect(this.encryptor.coefficient).toBeDefined();
    });

    it('the coefficient should be a number', function () {
      expect(typeof this.encryptor.coefficient).toBe('number');
    });

    it('each encryptor instance should have a different coefficient.', function () {
      expect(this.Encryptor.prototype.coefficient).not.toBeDefined();
    });

    it('the encrypt method should be defined', function () {
      expect(this.encryptor.encrypt).toBeDefined();
    });

    it('the encrypt method should not be limited to instances', function () {
      var secondEncryptor = new this.Encryptor();
      expect(this.encryptor.encrypt).toBe(secondEncryptor.encrypt);
    });

  });

  describe('Case for invalid input: ', function () {

    beforeEach(function () {
      this.Encryptor = Encryptor;
      this.encryptor = new this.Encryptor(13);
    });

    afterEach(function () {
      this.Encryptor = undefined;
      this.encryptor = undefined;
    });

    it('throws an error when the encrypt method is called without any arguments', function () {
      expect(function () { this.encryptor.encrypt(); }).toThrow(new Error('Please supply the string to be encrypted.'));
    });

    it('throws an error when the encrypt method is called with an empty string', function () {
      expect(function () { this.encryptor.encrypt(''); }).toThrow(new Error('The source string must not be empty.'));
    });

    it('throws an error when the encrypt method is called with input that is not a string.', function () {
      expect(function () { this.encrypt.encrypt(4); }).toThrow(new Error('The source argument must be a string.'));
    });

  });

  describe('Case for single-character strings.', function () {

    beforeEach(function () {
      this.Encryptor = Encryptor;
      this.encryptor = new this.Encryptor(13);
    });

    afterEach(function () {
      this.Encryptor = undefined;
      this.encryptor = undefined;
    });

    it('should return "n" for "a".', function () {
      expect(this.encryptor.encrypt("a")).toBe("n");
    });

    it('should return "n" for "A".', function () {
      expect(this.encryptor.encrypt("A")).toBe("n");
    });

    it('should return "m" for "z".', function () {
      expect(this.encryptor.encrypt("z")).toBe("m");
    });

    it('should return "s" for "F".', function () {
      expect(this.encryptor.encrypt("F")).toBe("s");
    });

    it('should return "f" for "A" for another encryptor defined by "new Encryptor(5)"', function () {
      var secondEncryptor = new this.Encryptor(5);
      expect(secondEncryptor.encrypt("A")).toBe("f");
    });

    it('should return "f" for "A" for another encryptor defined by "new Encryptor(135)"', function () {
      var thirdEncryptor = new this.Encryptor(135);
      expect(thirdEncryptor.encrypt("A")).toBe("f");
    });

  });

  describe('Case for multi-character strings.', function () {

    beforeEach(function () {
      this.Encryptor = Encryptor;
      this.encryptor = new this.Encryptor(13);
    });

    afterEach(function () {
      this.Encryptor = undefined;
      this.encryptor = undefined;
    });

    it('should return "uryyb" for "hello".', function () {
      expect(this.encryptor.encrypt("hello")).toBe("uryyb");
    });

    it('should return "uryyb" for "HELLO".', function () {
      expect(this.encryptor.encrypt("HELLO")).toBe("uryyb");
    });

    it('should return "mjqqt" for "HELLO" for another encryptor defined by "new Encryptor(5)"', function () {
      var secondEncryptor = new this.Encryptor(5);
      expect(secondEncryptor.encrypt("HELLO")).toBe("mjqqt");
    });

    it('should return "zwddg" for "HELLO" for another encryptor defined by "new Encryptor(200)"', function () {
      var secondEncryptor = new this.Encryptor(200);
      expect(secondEncryptor.encrypt("HELLO")).toBe("zwddg");
    });

    it('should return "gdkkn" for "HELLO" for another encryptor defined by "new Encryptor(-1)"', function () {
      var secondEncryptor = new this.Encryptor(-1);
      expect(secondEncryptor.encrypt("HELLO")).toBe("gdkkn");
    });

  });

});
