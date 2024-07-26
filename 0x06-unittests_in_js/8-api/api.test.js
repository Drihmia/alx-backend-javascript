const { expect } = require('chai');
const express = require('express');
const request = require('request');
const app = require('./api');

describe('Index page', () => {
  it.only('check status code to 200', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Welcome to the payment system');
      expect(res.request.method).to.equal('GET');
      expect(res.headers['content-length']).to.equal('29');
      expect(res.request.port).to.equal('7865');
      expect(res.request.host).to.equal('localhost');
      expect(res.request.path).to.equal('/');
      done()
    });
  });
});
