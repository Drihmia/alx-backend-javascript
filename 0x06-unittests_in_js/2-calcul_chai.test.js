const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUBTRACT', () => {
    it('sUBTRACT: sum of two positive int', () => {
      expect(calculateNumber('SUBTRACT', 2, 5)).to.equal(-3);
    });
    it('sUBTRACT: subtract between float un integer', () => {
      expect(calculateNumber('SUBTRACT', 2, 4.6)).to.equal(-3);
    });
    it('sUBTRACT: subtract between two positive float with round half up', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 4.6)).to.equal(-2);
    });
    it('sUBTRACT: subtract between two positive float with round half down', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 4.4)).to.equal(-2);
    });
    it('sUBTRACT: subtract between two positive float with round half down and other up', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 4.7)).to.equal(-3);
    });
    it('sUBTRACT: subtract between integer, positive and negative', () => {
      expect(calculateNumber('SUBTRACT', 2, -4)).to.equal(6);
    });
    it('sUBTRACT: subtract between two negative int', () => {
      expect(calculateNumber('SUBTRACT', -2, -4)).to.equal(2);
    });
    it('sUBTRACT: subtract between two negative float with round half up', () => {
      expect(calculateNumber('SUBTRACT', -2.5, -4.6)).to.equal(3);
    });
    it('sUBTRACT: subtract between two negative float with round half down', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -4.4)).to.equal(2);
    });
    it('sUBTRACT: subtract between two negative float with round half down and other up', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -4.7)).to.equal(3);
    });
    it('sUBTRACT: first parameters is a string', () => {
      expect(calculateNumber('SUBTRACT', '2', 4)).to.equal(-2);
    });
    it('sUBTRACT: second parameters is a string', () => {
      expect(calculateNumber('SUBTRACT', 2, '4')).to.equal(-2);
    });
    it('sUBTRACT: both parameters are strings', () => {
      expect(calculateNumber('SUBTRACT', '2', '4')).to.equal(-2);
    });
    it('sUBTRACT: both parameters are strings, one of them in float format', () => {
      expect(calculateNumber('SUBTRACT', '2', '4.6')).to.equal(-3);
    });
    it('sUBTRACT: both parameters are strings in float format', () => {
      expect(calculateNumber('SUBTRACT', '2.5', '4.6')).to.equal(-2);
    });
    it('sUBTRACT: one of parameters is missing', () => {
      expect(calculateNumber('SUBTRACT', 2)).to.be.NaN;
    });
    it('sUBTRACT: both parameters is missing', () => {
      expect(calculateNumber('SUBTRACT')).to.be.NaN;
    });
    it('sUBTRACT: one of parameters is NaN', () => {
      expect(calculateNumber('SUBTRACT', NaN, 4)).to.be.NaN;
    });
    it('sUBTRACT: both parameters is NaN', () => {
      expect(calculateNumber('SUBTRACT', NaN, NaN)).to.be.NaN;
    });
    it('sUBTRACT: one of parameters is Infinity', () => {
      expect(calculateNumber('SUBTRACT', Infinity, 4)).to.equal(Infinity);
    });
    it('sUBTRACT: both parameters is Infinity', () => {
      expect(calculateNumber('SUBTRACT', Infinity, Infinity)).to.be.NaN;
    });
  });
  describe('sUM', () => {
    it('sUM: sum of two positive int', () => {
      expect(calculateNumber('SUM', 2, 5)).to.equal(7);
    });
    it('sUM: sum of float un integer', () => {
      expect(calculateNumber('SUM', 2, 4.6)).to.equal(7);
    });
    it('sUM: sum of two positive float with round half up', () => {
      expect(calculateNumber('SUM', 2.5, 4.6)).to.equal(8);
    });
    it('sUM: sum of two positive float with round half down', () => {
      expect(calculateNumber('SUM', 2.3, 4.4)).to.equal(6);
    });
    it('sUM: sum of two positive float with round half down and other up', () => {
      expect(calculateNumber('SUM', 2.3, 4.7)).to.equal(7);
    });
    it('sUM: sum of integer, positive and negative', () => {
      expect(calculateNumber('SUM', 2, -4)).to.equal(-2);
    });
    it('sUM: sum of two negative int', () => {
      expect(calculateNumber('SUM', -2, -4)).to.equal(-6);
    });
    it('sUM: sum of two negative float with round half up', () => {
      expect(calculateNumber('SUM', -2.5, -4.6)).to.equal(-7);
    });
    it('sUM: sum of two negative float with round half down', () => {
      expect(calculateNumber('SUM', -2.3, -4.4)).to.equal(-6);
    });
    it('sUM: sum of two negative float with round half down and other up', () => {
      expect(calculateNumber('SUM', -2.3, -4.7)).to.equal(-7);
    });
    it('sUM: first parameters is a string', () => {
      expect(calculateNumber('SUM', '2', 4)).to.equal(6);
    });
    it('sUM: second parameters is a string', () => {
      expect(calculateNumber('SUM', 2, '4')).to.equal(6);
    });
    it('sUM: both parameters are strings', () => {
      expect(calculateNumber('SUM', '2', '4')).to.equal(6);
    });
    it('sUM: both parameters are strings, one of them in float format', () => {
      expect(calculateNumber('SUM', '2', '4.6')).to.equal(7);
    });
    it('sUM: both parameters are strings in float format', () => {
      expect(calculateNumber('SUM', '2.5', '4.6')).to.equal(8);
    });
    it('sUM: one of parameters is missing', () => {
      expect(calculateNumber('SUM', 2)).to.be.NaN;
    });
    it('sUM: both parameters is missing', () => {
      expect(calculateNumber('SUM')).to.be.NaN;
    });
    it('sUM: one of parameters is NaN', () => {
      expect(calculateNumber('SUM', NaN, 4)).to.be.NaN;
    });
    it('sUM: both parameters is NaN', () => {
      expect(calculateNumber('SUM', NaN, NaN)).to.be.NaN;
    });
    it('sUM: one of parameters is Infinity', () => {
      expect(calculateNumber('SUM', Infinity, 4)).to.equal(Infinity);
    });
    it('sUM: both parameters is Infinity', () => {
      expect(calculateNumber('SUM', Infinity, Infinity)).to.equal(Infinity);
    });
  });
  describe('dIVIDE', () => {
    it('dIVIDE: divide of two positive int', () => {
      expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
    });
    it('dIVIDE: divide of float un integer', () => {
      expect(calculateNumber('DIVIDE', 2, 4)).to.equal(0.5);
    });
    it('dIVIDE: divide of two positive float with round half up', () => {
      expect(calculateNumber('DIVIDE', 2.5, 4.6)).to.equal(0.6);
    });
    it('dIVIDE: divide of two positive float with round half down', () => {
      expect(calculateNumber('DIVIDE', 2.3, 4.4)).to.equal(0.5);
    });
    it('dIVIDE: divide of two positive float with round half down and other up', () => {
      expect(calculateNumber('DIVIDE', 2.3, 4.7)).to.equal(0.4);
    });
    it('dIVIDE: divide of integer, positive and negative', () => {
      expect(calculateNumber('DIVIDE', 2, -4)).to.equal(-0.5);
    });
    it('dIVIDE: divide of two negative int', () => {
      expect(calculateNumber('DIVIDE', -2, -4)).to.equal(0.5);
    });
    it('dIVIDE: divide of two negative float with round half up', () => {
      expect(calculateNumber('DIVIDE', -2.5, -4.6)).to.equal(0.4);
    });
    it('dIVIDE: divide of two negative float with round half down', () => {
      expect(calculateNumber('DIVIDE', -2.3, -4.4)).to.equal(0.5);
    });
    it('dIVIDE: divide of two negative float with round half down and other up', () => {
      expect(calculateNumber('DIVIDE', -2.3, -4.7)).to.equal(0.4);
    });
    it('dIVIDE: first parameters is a string', () => {
      expect(calculateNumber('DIVIDE', '2', 4)).to.equal(0.5);
    });
    it('dIVIDE: second parameters is a string', () => {
      expect(calculateNumber('DIVIDE', 2, '4')).to.equal(0.5);
    });
    it('dIVIDE: both parameters are strings', () => {
      expect(calculateNumber('DIVIDE', '2', '4')).to.equal(0.5);
    });
    it('dIVIDE: both parameters are strings, one of them in float format', () => {
      expect(calculateNumber('DIVIDE', '2', '4.6')).to.equal(0.4);
    });
    it('dIVIDE: both parameters are strings in float format', () => {
      expect(calculateNumber('DIVIDE', '2.5', '4.6')).to.equal(0.6);
    });
    it('dIVIDE: one of parameters is missing', () => {
      expect(calculateNumber('DIVIDE', 2)).to.equal('Error');
    });
    it('dIVIDE: both parameters is missing', () => {
      expect(calculateNumber('DIVIDE')).to.equal('Error');
    });
    it('dIVIDE: one of parameters is NaN', () => {
      expect(calculateNumber('DIVIDE', NaN, 4)).to.be.NaN;
    });
    it('dIVIDE: both parameters is NaN', () => {
      expect(calculateNumber('DIVIDE', NaN, NaN)).to.equal('Error');
    });
    it('dIVIDE: one of parameters is Infinity', () => {
      expect(calculateNumber('DIVIDE', Infinity, 4)).to.equal(Infinity);
    });
    it('dIVIDE: both parameters is Infinity', () => {
      expect(calculateNumber('DIVIDE', Infinity, Infinity)).to.be.NaN;
    });
    it('dIVIDE: divide by 0', () => {
      expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
    });
    it('dIVIDE: divide by 0 with float', () => {
      expect(calculateNumber('DIVIDE', 2.5, 0)).to.equal('Error');
    });
    it('dIVIDE: divide by 0 with negative', () => {
      expect(calculateNumber('DIVIDE', -2, 0)).to.equal('Error');
    });
  });
});
