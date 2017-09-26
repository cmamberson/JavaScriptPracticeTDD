var changeMachine = require('../javascript/changeMachine');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Change Machine', function() {

    context('given a change amount is given', function() {
      it('returns the amount of bills needed for change', function() {
        var amount = changeMachine(118);
        console.log(amount);
        expect(amount).to.eql([5, 1, 1, 3]);
      });
    });

});