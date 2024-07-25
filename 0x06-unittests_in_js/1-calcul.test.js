const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUBTRACT', () => {
    it('SUBTRACT: sum of two positive int', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 5), -3);
    });
    it('SUBTRACT: subtract between float un integer', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 4.6), -3);
    });
    it('SUBTRACT: subtract between two positive float with round half up', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 4.6), -2);
    });
    it('SUBTRACT: subtract between two positive float with round half down', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 4.4), -2);
    });
    it('SUBTRACT: subtract between two positive float with round half down and other up', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 4.7), -3);
    });
    it('SUBTRACT: subtract between integer, positive and negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, -4), 6);
    });
    it('SUBTRACT: subtract between two negative int', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2, -4), 2);
    });
    it('SUBTRACT: subtract between two negative float with round half up', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.5, -4.6), 3);
    });
    it('SUBTRACT: subtract between two negative float with round half down', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -4.4), 2);
    });
    it('SUBTRACT: subtract between two negative float with round half down and other up', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -4.7), 3);
    });
    it('SUBTRACT: first parameters is a string', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', '2', 4), -2);
    });
    it('SUBTRACT: second parameters is a string', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, '4'), -2);
    });
    it('SUBTRACT: both parameters are strings', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', '2', '4'), -2);
    });
    it('SUBTRACT: both parameters are strings, one of them in float format', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', '2', '4.6'), -3);
    });
    it('SUBTRACT: both parameters are strings in float format', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', '2.5', '4.6'), -2);
    });
    it('SUBTRACT: one of parameters is missing', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2), NaN);
    });
    it('SUBTRACT: both parameters is missing', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', ), NaN);
    });
    it('SUBTRACT: one of parameters is NaN', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', NaN, 4), NaN);
    });
    it('SUBTRACT: both parameters is NaN', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', NaN, NaN), NaN);
    });
    it('SUBTRACT: one of parameters is Infinity', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', Infinity, 4), Infinity);
    });
    it('SUBTRACT: both parameters is Infinity', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', Infinity, Infinity), NaN);
    });
  });
  describe('SUM', () => {
    it('SUM: sum of two positive int', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 5), 7);
    });
    it('SUM: sum of float un integer', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 4.6), 7);
    });
    it('SUM: sum of two positive float with round half up', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 4.6), 8);
    });
    it('SUM: sum of two positive float with round half down', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 4.4), 6);
    });
    it('SUM: sum of two positive float with round half down and other up', () => {
      assert.strictEqual(calculateNumber('SUM', 2.3, 4.7), 7);
    });
    it('SUM: sum of integer, positive and negative', () => {
      assert.strictEqual(calculateNumber('SUM', 2, -4), -2);
    });
    it('SUM: sum of two negative int', () => {
      assert.strictEqual(calculateNumber('SUM', -2, -4), -6);
    });
    it('SUM: sum of two negative float with round half up', () => {
      assert.strictEqual(calculateNumber('SUM', -2.5, -4.6), -7);
    });
    it('SUM: sum of two negative float with round half down', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -4.4), -6);
    });
    it('SUM: sum of two negative float with round half down and other up', () => {
      assert.strictEqual(calculateNumber('SUM', -2.3, -4.7), -7);
    });
    it('SUM: first parameters is a string', () => {
      assert.strictEqual(calculateNumber('SUM', '2', 4), 6);
    });
    it('SUM: second parameters is a string', () => {
      assert.strictEqual(calculateNumber('SUM', 2, '4'), 6);
    });
    it('SUM: both parameters are strings', () => {
      assert.strictEqual(calculateNumber('SUM', '2', '4'), 6);
    });
    it('SUM: both parameters are strings, one of them in float format', () => {
      assert.strictEqual(calculateNumber('SUM', '2', '4.6'), 7);
    });
    it('SUM: both parameters are strings in float format', () => {
      assert.strictEqual(calculateNumber('SUM', '2.5', '4.6'), 8);
    });
    it('SUM: one of parameters is missing', () => {
      assert.strictEqual(calculateNumber('SUM', 2), NaN);
    });
    it('SUM: both parameters is missing', () => {
      assert.strictEqual(calculateNumber('SUM', ), NaN);
    });
    it('SUM: one of parameters is NaN', () => {
      assert.strictEqual(calculateNumber('SUM', NaN, 4), NaN);
    });
    it('SUM: both parameters is NaN', () => {
      assert.strictEqual(calculateNumber('SUM', NaN, NaN), NaN);
    });
    it('SUM: one of parameters is Infinity', () => {
      assert.strictEqual(calculateNumber('SUM', Infinity, 4), Infinity);
    });
    it('SUM: both parameters is Infinity', () => {
      assert.strictEqual(calculateNumber('SUM', Infinity, Infinity), Infinity);
    });
  });
  describe('DIVIDE', () => {
    it('DIVIDE: divide of two positive int', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 5), 2);
    });
    it('DIVIDE: divide of float un integer', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 4), 0.5);
    });
    it('DIVIDE: divide of two positive float with round half up', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 4.6), 0.6);
    });
    it('DIVIDE: divide of two positive float with round half down', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.3, 4.4), 0.5);
    });
    it('DIVIDE: divide of two positive float with round half down and other up', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.3, 4.7), 0.4);
    });
    it('DIVIDE: divide of integer, positive and negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, -4), -0.5);
    });
    it('DIVIDE: divide of two negative int', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2, -4), 0.5);
    });
    it('DIVIDE: divide of two negative float with round half up', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.5, -4.6), 0.4);
    });
    it('DIVIDE: divide of two negative float with round half down', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.3, -4.4), 0.5);
    });
    it('DIVIDE: divide of two negative float with round half down and other up', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.3, -4.7), 0.4);
    });
    it('DIVIDE: first parameters is a string', () => {
      assert.strictEqual(calculateNumber('DIVIDE', '2', 4), 0.5);
    });
    it('DIVIDE: second parameters is a string', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, '4'), 0.5);
    });
    it('DIVIDE: both parameters are strings', () => {
      assert.strictEqual(calculateNumber('DIVIDE', '2', '4'), 0.5);
    });
    it('DIVIDE: both parameters are strings, one of them in float format', () => {
      assert.strictEqual(calculateNumber('DIVIDE', '2', '4.6'), 0.4);
    });
    it('DIVIDE: both parameters are strings in float format', () => {
      assert.strictEqual(calculateNumber('DIVIDE', '2.5', '4.6'), 0.6);
    });
    it('DIVIDE: one of parameters is missing', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2), 'Error');
    });
    it('DIVIDE: both parameters is missing', () => {
      assert.strictEqual(calculateNumber('DIVIDE', ), 'Error');
    });
    it('DIVIDE: one of parameters is NaN', () => {
      assert.strictEqual(calculateNumber('DIVIDE', NaN, 4), NaN);
    });
    it('DIVIDE: both parameters is NaN', () => {
      assert.strictEqual(calculateNumber('DIVIDE', NaN, NaN), 'Error');
    });
    it('DIVIDE: one of parameters is Infinity', () => {
      assert.strictEqual(calculateNumber('DIVIDE', Infinity, 4), Infinity);
    });
    it('DIVIDE: both parameters is Infinity', () => {
      assert.strictEqual(calculateNumber('DIVIDE', Infinity, Infinity), NaN);
    });
    it('DIVIDE: divide by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 0), 'Error');
    });
    it('DIVIDE: divide by 0 with float', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 0), 'Error');
    });
    it('DIVIDE: divide by 0 with negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2, 0), 'Error');
    });
  });
});
