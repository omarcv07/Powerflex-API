const request = require('supertest');
const express = require('express');
const router = require('.');
const { expect } = require('chai');

const app = express();
app.use(router);

describe('router', () => {
  it('should return 200 for GET /sprockets', async () => {
    const res = await request(app).get('/sprockets');
    expect(res.body.code).to.be.equal(200);
  });

  it('should return 200 for GET /factories', async () => {
    const res = await request(app).get('/factories');
    expect(res.body.code).to.be.equal(200);
  });

  it('should return 200 for PUT /sprockets/:id', async () => {
    const res = await request(app).put('/sprockets/1').send({
      teeth: 12
    });
    expect(res.body.code).to.be.equal(200);
  });
});
