/**
 * Round a and b and return the sum
 * @param {string} type - The type of operation.
 * @param {number} a - The first number.
 * @param {number} b - the second number.
 * @returns {number} return the sum.
 */

const calculateNumber = (type, a, b) => {
  const divide = (argOne, argTwo) => {
      if (!Math.round(b)) return 'Error';
      return (Math.round(argOne) / Math.round(argTwo));
    }
  const operationObject = {
    SUM: Math.round(a) + Math.round(b),
    SUBTRACT: Math.round(a) - Math.round(b),
    DIVIDE: divide(a, b),
  };

  return operationObject[type];
};

module.exports = calculateNumber;
