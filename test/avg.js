var avg = require('../javascript/avg');
var chai = require('chai');
var expect = chai.expect;

describe('Testing avg', function() {

    context('given three numbers', function() {
      it('returns average of three numbers', function() {
        var result = avg(2, 4, 6);
        expect(result).to.equal(4);
      });
    });

});