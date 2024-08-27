const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe.only('getPaymentTokenFromAPI', () => {
  it('Async function should return True', (done) => {
    getPaymentTokenFromAPI(true).then((output) => {
      expect(output).to.have.property('data');
      expect(output.data).to.equal('Successful response from the API');
      expect(output).to.deep.equal({ data: 'Successful response from the API' });
      done();
    })
  });
});
