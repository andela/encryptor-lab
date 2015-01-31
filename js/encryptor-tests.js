'use strict';

describe('Encryptor: ', function() {

  describe('Case for the Encryptor constructor.', function () {

    beforeEach(function () {
      this.Encryptor = Encryptor;
      this.encryptor = new this.Encryptor();
    });

    afterEach(function () {
      this.Encryptor = undefined;
      this.encryptor = undefined;
    });

    it('the encryptor should be an instanceof the Encryptor class.', function () {
      expect(this.encryptor instanceof Encryptor).toBe(true);
    });

    it('the encrypt method should be defined', function () {
      expect(this.encryptor.encrypt).toBeDefined();
    });

    it('the encrypt method should not be limited to instances', function () {
      var secondEncryptor = new this.Encryptor();
      expect(this.encryptor.encrypt).toBe(secondEncryptor.encrypt);
    });

  });

});
