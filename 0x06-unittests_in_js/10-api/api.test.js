const { expect } = require('chai');
const express = require('express');
const request = require('request');
const app = require('./api');

describe('Index page', () => {
  it.only('check different aspect of res objec tfor home page: VALID TEST', (done) => {
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

  it.only('check id from /student/:id  : VALID TEST', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Payment methods for cart 12');
      expect(res.request.method).to.equal('GET');
      expect(res.headers['content-length']).to.equal('27');
      expect(res.request.port).to.equal('7865');
      expect(res.request.host).to.equal('localhost');
      expect(res.request.path).to.equal('/cart/12');
      done()
    });
  });

  it.only('check id from /student/:id  : INVALID TEST', (done) => {
    request.get('http://localhost:7865/cart/abc', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(res.body).to.equal('Cart ID is invalid');
      expect(res.request.method).to.equal('GET');
      expect(res.headers['content-length']).to.equal('18');
      expect(res.request.port).to.equal('7865');
      expect(res.request.host).to.equal('localhost');
      expect(res.request.path).to.equal('/cart/abc');
      done()
    });
  });
  it.only('check for login endpoint', (done) => {
    request.post({
      url:'http://localhost:7865/login',
      json: true,
      body : {
        userName: 'REDOUANE'
      },
      headers: {
        'Content-Type': 'application/json'

      },
    },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.equal('Welcome REDOUANE');
        expect(res.request.method).to.equal('POST');
        expect(res.headers['content-length']).to.equal('16');
        expect(res.request.port).to.equal('7865');
        expect(res.request.host).to.equal('localhost');
        expect(res.request.path).to.equal('/login');
        done();
      });
  });
});
