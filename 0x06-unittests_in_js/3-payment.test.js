'use strict';

const { expect } = require('chai');

const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

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

  it('when calling sendPaymentRequestToApi, should call calculateNumber with the args : "SUM" and a, b', () => {
    // const res = Utils.calculateNumber('SUM', 10, 20);
    sendPaymentRequestToApi(a, b);

    expect(calculateNumberSpy.called).to.be.true;
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', a, b)).to.equal(true);
  });
});
