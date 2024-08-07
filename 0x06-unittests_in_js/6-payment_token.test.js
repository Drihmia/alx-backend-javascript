const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe.only('getPaymentTokenFromAPI', () => {
  it('Async function should return True', (done) => {
    getPaymentTokenFromAPI(true);
    done();
    expect(getPaymentTokenFromAPI(true)).to.be.true;
  });
});
