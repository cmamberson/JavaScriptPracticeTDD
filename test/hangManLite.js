var hangManLite = require('../javascript/hangManLite');
var chai = require('chai');
var expect = chai.expect;

describe('Testing HangManLite', function() {

    context('given i is in christina twice', function() {
      it('returns the number 2', function() {
        var letter = hangManLite('christina','i');
        expect(letter).to.equal(2);
      });
    });

});