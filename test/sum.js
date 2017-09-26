var sum = require('../javascript/sum');
var chai = require('chai');
var expect = chai.expect;

describe('Testing sum', function() {

    context('given two numbers', function() {
      it('returns sum of two numbers', function() {
        var result = sum(1,1);
        expect(result).to.equal(2);
      });
    });

});