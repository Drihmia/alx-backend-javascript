const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;
  const a = 10;
  const b = 20;

  beforeEach(() => {
    // Create a spy for Utils.calculateNumber
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the original method
    sinon.restore();
  });

  it('when calling sendPaymentRequestToApi, should call calculateNumber once', () => {
    // CALL THE FUNCTION ONCE
    sendPaymentRequestToApi(a, b);

    // CHECK IF THE FUNCTION WAS CALLED ONCE
    expect(calculateNumberSpy.called).to.be.true;
  });

  it('when calling sendPaymentRequestToApi, should call calculateNumber with the args : "SUM" and a, b', () => {
    // CALL THE FUNCTION ONCE
    sendPaymentRequestToApi(a, b);

    // CHECK IF THE FUNCTION WAS CALLED WITH THE RIGHT ARGUMENTS
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', a, b)).to.equal(true);
  });
});
