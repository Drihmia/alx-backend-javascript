const Utils = {
  calculateNumber(type, a, b) {
    const divide = (argOne, argTwo) => {
      if (!Math.round(b)) return 'Error';
      return (Math.round(argOne) / Math.round(argTwo));
    };
    const operationObject = {
      SUM: Math.round(a) + Math.round(b),
      SUBTRACT: Math.round(a) - Math.round(b),
      DIVIDE: divide(a, b),
    };

    const output = operationObject[type];
    return output;
  },
};

module.exports = Utils;
