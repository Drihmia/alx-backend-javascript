const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  return Utils.calculateNumber('SUM', totalAmount, totalShipping);
}

module.exports = { sendPaymentRequestToApi };
