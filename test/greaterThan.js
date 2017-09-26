var greaterThan = require('../javascript/greaterThan');
var chai = require('chai');
var expect = chai.expect;

describe('Testing greater than', function() {

    context('given two numbers', function() {
      it('returns true if the second parameter is greater than the first', function() {
        var result = greaterThan(1,2);
        expect(result).to.equal(true);
      });
    });

});