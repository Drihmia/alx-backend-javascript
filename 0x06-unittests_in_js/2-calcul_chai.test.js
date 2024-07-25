const expect = require('chai').expect;
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUBTRACT', () => {
    it('SUBTRACT: sum of two positive int', () => {
      expect(calculateNumber('SUBTRACT', 2, 5)).to.equal(-3);
    });
    it('SUBTRACT: subtract between float un integer', () => {
      expect(calculateNumber('SUBTRACT', 2, 4.6)).to.equal(-3);
    });
    it('SUBTRACT: subtract between two positive float with round half up', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 4.6)).to.equal(-2);
    });
    it('SUBTRACT: subtract between two positive float with round half down', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 4.4)).to.equal(-2);
    });
    it('SUBTRACT: subtract between two positive float with round half down and other up', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 4.7)).to.equal(-3);
    });
    it('SUBTRACT: subtract between integer, positive and negative', () => {
      expect(calculateNumber('SUBTRACT', 2, -4)).to.equal(6);
    });
    it('SUBTRACT: subtract between two negative int', () => {
      expect(calculateNumber('SUBTRACT', -2, -4)).to.equal(2);
    });
    it('SUBTRACT: subtract between two negative float with round half up', () => {
      expect(calculateNumber('SUBTRACT', -2.5, -4.6)).to.equal(3);
    });
    it('SUBTRACT: subtract between two negative float with round half down', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -4.4)).to.equal(2);
    });
    it('SUBTRACT: subtract between two negative float with round half down and other up', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -4.7)).to.equal(3);
    });
    it('SUBTRACT: first parameters is a string', () => {
      expect(calculateNumber('SUBTRACT', '2', 4)).to.equal(-2);
    });
    it('SUBTRACT: second parameters is a string', () => {
      expect(calculateNumber('SUBTRACT', 2, '4')).to.equal(-2);
    });
    it('SUBTRACT: both parameters are strings', () => {
      expect(calculateNumber('SUBTRACT', '2', '4')).to.equal(-2);
    });
    it('SUBTRACT: both parameters are strings, one of them in float format', () => {
      expect(calculateNumber('SUBTRACT', '2', '4.6')).to.equal(-3);
    });
    it('SUBTRACT: both parameters are strings in float format', () => {
      expect(calculateNumber('SUBTRACT', '2.5', '4.6')).to.equal(-2);
    });
    it('SUBTRACT: one of parameters is missing', () => {
      expect(calculateNumber('SUBTRACT', 2)).to.be.NaN;
    });
    it('SUBTRACT: both parameters is missing', () => {
      expect(calculateNumber('SUBTRACT', )).to.be.NaN;
    });
    it('SUBTRACT: one of parameters is NaN', () => {
      expect(calculateNumber('SUBTRACT', NaN, 4)).to.be.NaN;
    });
    it('SUBTRACT: both parameters is NaN', () => {
      expect(calculateNumber('SUBTRACT', NaN, NaN)).to.be.NaN;
    });
    it('SUBTRACT: one of parameters is Infinity', () => {
      expect(calculateNumber('SUBTRACT', Infinity, 4)).to.equal(Infinity);
    });
    it('SUBTRACT: both parameters is Infinity', () => {
      expect(calculateNumber('SUBTRACT', Infinity, Infinity)).to.be.NaN;
    });
  });
  describe('SUM', () => {
    it('SUM: sum of two positive int', () => {
      expect(calculateNumber('SUM', 2, 5)).to.equal(7);
    });
    it('SUM: sum of float un integer', () => {
      expect(calculateNumber('SUM', 2, 4.6)).to.equal(7);
    });
    it('SUM: sum of two positive float with round half up', () => {
      expect(calculateNumber('SUM', 2.5, 4.6)).to.equal(8);
    });
    it('SUM: sum of two positive float with round half down', () => {
      expect(calculateNumber('SUM', 2.3, 4.4)).to.equal(6);
    });
    it('SUM: sum of two positive float with round half down and other up', () => {
      expect(calculateNumber('SUM', 2.3, 4.7)).to.equal(7);
    });
    it('SUM: sum of integer, positive and negative', () => {
      expect(calculateNumber('SUM', 2, -4)).to.equal(-2);
    });
    it('SUM: sum of two negative int', () => {
      expect(calculateNumber('SUM', -2, -4)).to.equal(-6);
    });
    it('SUM: sum of two negative float with round half up', () => {
      expect(calculateNumber('SUM', -2.5, -4.6)).to.equal(-7);
    });
    it('SUM: sum of two negative float with round half down', () => {
      expect(calculateNumber('SUM', -2.3, -4.4)).to.equal(-6);
    });
    it('SUM: sum of two negative float with round half down and other up', () => {
      expect(calculateNumber('SUM', -2.3, -4.7)).to.equal(-7);
    });
    it('SUM: first parameters is a string', () => {
      expect(calculateNumber('SUM', '2', 4)).to.equal(6);
    });
    it('SUM: second parameters is a string', () => {
      expect(calculateNumber('SUM', 2, '4')).to.equal(6);
    });
    it('SUM: both parameters are strings', () => {
      expect(calculateNumber('SUM', '2', '4')).to.equal(6);
    });
    it('SUM: both parameters are strings, one of them in float format', () => {
      expect(calculateNumber('SUM', '2', '4.6')).to.equal(7);
    });
    it('SUM: both parameters are strings in float format', () => {
      expect(calculateNumber('SUM', '2.5', '4.6')).to.equal(8);
    });
    it('SUM: one of parameters is missing', () => {
      expect(calculateNumber('SUM', 2)).to.be.NaN;
    });
    it('SUM: both parameters is missing', () => {
      expect(calculateNumber('SUM', )).to.be.NaN;
    });
    it('SUM: one of parameters is NaN', () => {
      expect(calculateNumber('SUM', NaN, 4)).to.be.NaN;
    });
    it('SUM: both parameters is NaN', () => {
      expect(calculateNumber('SUM', NaN, NaN)).to.be.NaN;
    });
    it('SUM: one of parameters is Infinity', () => {
      expect(calculateNumber('SUM', Infinity, 4)).to.equal(Infinity);
    });
    it('SUM: both parameters is Infinity', () => {
      expect(calculateNumber('SUM', Infinity, Infinity)).to.equal(Infinity);
    });
  });
  describe('DIVIDE', () => {
    it('DIVIDE: divide of two positive int', () => {
      expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
    });
    it('DIVIDE: divide of float un integer', () => {
      expect(calculateNumber('DIVIDE', 2, 4)).to.equal(0.5);
    });
    it('DIVIDE: divide of two positive float with round half up', () => {
      expect(calculateNumber('DIVIDE', 2.5, 4.6)).to.equal(0.6);
    });
    it('DIVIDE: divide of two positive float with round half down', () => {
      expect(calculateNumber('DIVIDE', 2.3, 4.4)).to.equal(0.5);
    });
    it('DIVIDE: divide of two positive float with round half down and other up', () => {
      expect(calculateNumber('DIVIDE', 2.3, 4.7)).to.equal(0.4);
    });
    it('DIVIDE: divide of integer, positive and negative', () => {
      expect(calculateNumber('DIVIDE', 2, -4)).to.equal(-0.5);
    });
    it('DIVIDE: divide of two negative int', () => {
      expect(calculateNumber('DIVIDE', -2, -4)).to.equal(0.5);
    });
    it('DIVIDE: divide of two negative float with round half up', () => {
      expect(calculateNumber('DIVIDE', -2.5, -4.6)).to.equal(0.4);
    });
    it('DIVIDE: divide of two negative float with round half down', () => {
      expect(calculateNumber('DIVIDE', -2.3, -4.4)).to.equal(0.5);
    });
    it('DIVIDE: divide of two negative float with round half down and other up', () => {
      expect(calculateNumber('DIVIDE', -2.3, -4.7)).to.equal(0.4);
    });
    it('DIVIDE: first parameters is a string', () => {
      expect(calculateNumber('DIVIDE', '2', 4)).to.equal(0.5);
    });
    it('DIVIDE: second parameters is a string', () => {
      expect(calculateNumber('DIVIDE', 2, '4')).to.equal(0.5);
    });
    it('DIVIDE: both parameters are strings', () => {
      expect(calculateNumber('DIVIDE', '2', '4')).to.equal(0.5);
    });
    it('DIVIDE: both parameters are strings, one of them in float format', () => {
      expect(calculateNumber('DIVIDE', '2', '4.6')).to.equal(0.4);
    });
    it('DIVIDE: both parameters are strings in float format', () => {
      expect(calculateNumber('DIVIDE', '2.5', '4.6')).to.equal(0.6);
    });
    it('DIVIDE: one of parameters is missing', () => {
      expect(calculateNumber('DIVIDE', 2)).to.equal('Error');
    });
    it('DIVIDE: both parameters is missing', () => {
      expect(calculateNumber('DIVIDE', )).to.equal('Error');
    });
    it('DIVIDE: one of parameters is NaN', () => {
      expect(calculateNumber('DIVIDE', NaN, 4)).to.be.NaN;
    });
    it('DIVIDE: both parameters is NaN', () => {
      expect(calculateNumber('DIVIDE', NaN, NaN)).to.equal('Error');
    });
    it('DIVIDE: one of parameters is Infinity', () => {
      expect(calculateNumber('DIVIDE', Infinity, 4)).to.equal(Infinity);
    });
    it('DIVIDE: both parameters is Infinity', () => {
      expect(calculateNumber('DIVIDE', Infinity, Infinity)).to.be.NaN;
    });
    it('DIVIDE: divide by 0', () => {
      expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
    });
    it('DIVIDE: divide by 0 with float', () => {
      expect(calculateNumber('DIVIDE', 2.5, 0)).to.equal('Error');
    });
    it('DIVIDE: divide by 0 with negative', () => {
      expect(calculateNumber('DIVIDE', -2, 0)).to.equal('Error');
    });
  });
});
