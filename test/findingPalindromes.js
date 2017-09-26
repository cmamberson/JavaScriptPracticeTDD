var findingPalindromes = require('../javascript/findingPalindromes');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Palindromes', function() {

    context('given a word is a palindrome', function() {
      it('returns true', function() {
        var word = findingPalindromes('tacocat');
        expect(word).to.equal(true);
      });
    });

});