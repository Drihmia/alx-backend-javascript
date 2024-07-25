const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let logSpy;
  beforeEach(() => {
    // Create a spy for Utils.calculateNumber
    logSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original method
    sinon.restore();
  });
  it('console.log should log The total is: 120', () => {
    sinon.stub(Utils, 'calculateNumber').returns(120);

    // CALL THE FUNCTION ONCE
    const a = 100;
    const b = 20;
    sendPaymentRequestToApi(a, b);

    // CHECK IF THE FUNCTION WAS CALLED ONCE
    expect(logSpy.calledOnce).to.be.true;
    expect(logSpy.calledOnceWithExactly('The total is: 120')).to.equal(true);
  });

  it('console.log should log The total is: 20', () => {
    sinon.stub(Utils, 'calculateNumber').returns(20);

    // CALL THE FUNCTION ONCE
    const a = 10;
    const b = 10;
    sendPaymentRequestToApi(a, b);

    // CHECK IF THE FUNCTION WAS CALLED WITH THE RIGHT ARGUMENTS
    expect(logSpy.calledOnce).to.be.true;
    expect(logSpy.calledOnceWithExactly('The total is: 20')).to.equal(true);
  });
});
