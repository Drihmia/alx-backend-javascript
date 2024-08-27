const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSub;
  let logSpy;
  const a = 100;
  const b = 20;

  beforeEach(() => {
    calculateNumberSub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy for Utils.calculateNumber
    logSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original method
    sinon.restore();
  });

  it('when calling sendPaymentRequestToApi, should call calculateNumber once', () => {
    // CALL THE FUNCTION ONCE
    sendPaymentRequestToApi(a, b);

    // CHECK IF THE FUNCTION WAS CALLED ONCE
    expect(calculateNumberSub.called).to.be.true;
    expect(logSpy.called).to.be.true;
  });

  it('when calling sendPaymentRequestToApi, should call calculateNumber with the args : "SUM" and a, b', () => {
    // CALL THE FUNCTION ONCE
    sendPaymentRequestToApi(a, b);

    // CHECK IF THE FUNCTION WAS CALLED WITH THE RIGHT ARGUMENTS
    expect(calculateNumberSub.calledOnceWithExactly('SUM', a, b)).to.equal(true);
    expect(logSpy.calledOnceWithExactly('The total is: 10')).to.equal(true);
  });
});
