var secondLargest = require('../javascript/secondLargest');
var chai = require('chai');
var expect = chai.expect;

describe('Testing finding the second largest number', function() {

    context('given an array of numbers', function() {
      it('returns second largest number in the array', function() {
        var result = secondLargest([1, 2, 4, 10, 100, 50]);
        expect(result).to.equal(50);
      });
    });

});