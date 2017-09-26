var cherokeeHare = require('../javascript/cherokeeHare');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Cherokee Hare', function() {

    context('given a starting population of 100', function() {
      it('returns 160', function() {
        var population = cherokeeHare(100, .1, 5);
        expect(population).to.equal(160);
      });
    });

});