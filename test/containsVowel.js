var containsVowel = require('../javascript/containsVowel');
var chai = require('chai');
var expect = chai.expect;

describe('Testing to see if a word contains a vowel', function() {

    context('given a word', function() {
      it('returns true if it contains a vowel', function() {
        var word = containsVowel('christina');
        expect(word).to.equal(true);
      });
    });

});