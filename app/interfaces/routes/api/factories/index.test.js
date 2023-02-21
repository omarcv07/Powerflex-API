const request = require('supertest');
const express = require('express');
const factoryRoutes = require('.');
const { expect } = require('chai');

const app = express();
app.use(express.json());
app.use('/api', factoryRoutes);

describe('factoryRoutes', () => {
  describe('GET /api/factories', () => {
    it('should respond with a list of factories', async () => {
      const res = await request(app).get('/api/factories');
      expect(res.body.code).to.be.equal(200);
      expect(res.body.data).to.be.an('array');
    });
  });

  describe('GET /api/factories/:id', () => {
    it('should respond with a factory object', async () => {
      const res = await request(app).get('/api/factories/1');
      expect(res.body.code).to.be.equal(200);
      expect(res.body.data).to.be.an('object');
      expect(res.body.data.id).to.be.equal(1);
    });

    it('should respond with a 404 status if the factory is not found', async () => {
      const res = await request(app).get('/api/factories/999');
      expect(res.body.code).to.be.equal(400);
      expect(res.body.error.description).to.be.equal('Factory not found');
    });
  });
});
