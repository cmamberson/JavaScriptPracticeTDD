var tallestMountain = require('../javascript/tallestMountain');
var chai = require('chai');
var expect = chai.expect;

describe('Testing TallestMountain', function() {

    context('given mountain height of [500, 200, 300, 1800, 700, 5000, 3000]', function() {
      it('returns 5000 as the tallest mountain', function() {
        var tallest = tallestMountain([500, 200, 300, 1800, 700, 5000, 3000]);
        expect(tallest).to.equal(5000);
      });
    });

});