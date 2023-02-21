const request = require('supertest');
const express = require('express');
const { expect } = require('chai');
const sprocketRoutes = require('.');

const app = express();
app.use(express.json());
app.use('/api', sprocketRoutes);

describe('sprocketRoutes', () => {
  describe('GET /api/sprockets', () => {
    it('should respond with a list of sprockets', async () => {
      const res = await request(app).get('/api/sprockets');
      expect(res.body.code).to.be.equal(200);
      expect(res.body.data).to.be.an('array');
    });
  });

  describe('GET /api/sprockets/:id', () => {
    it('should respond with a sprocket object', async () => {
      const res = await request(app).get('/api/sprockets/1');
      expect(res.body.code).to.be.equal(200);
      expect(res.body.data).to.be.an('object');
      expect(res.body.data.id).to.be.equal(1);
    });

    it('should respond with a 404 status if the sprocket is not found', async () => {
      const res = await request(app).get('/api/sprockets/999');
      expect(res.body.code).to.be.equal(400);
      expect(res.body.error.description).to.be.equal('Sprocket not found');
    });
  });

  describe('POST /api/sprockets', () => {
    it('should create a new sprocket and respond with the new sprocket object', async () => {
      const newSprocket = {
        teeth: 10,
        pitch_diameter: 50.5,
        outside_diameter: 80.5,
        pitch: 8
      };
      const res = await request(app).post('/api/sprockets').send(newSprocket);
      expect(res.body.code).to.be.equal(200);
      expect(res.body.data.teeth).to.be.equal(10);
    });
  });

  describe('PUT /api/sprockets/:id', () => {
    it('should update an existing sprocket and respond with the updated sprocket object', async () => {
      const updatedSprocket = {
        teeth: 32,
        pitch_diameter: 50.5,
        outside_diameter: 80.5,
        pitch: 8
      };
      const res = await request(app).put('/api/sprockets/1').send(updatedSprocket);
      expect(res.status).to.be.equal(200);
      expect(res.body.data.teeth).to.be.equal(32);
    });

    it('should respond with a 404 status if the sprocket is not found', async () => {
      const res = await request(app).put('/api/sprockets/999');
      expect(res.status).to.be.equal(400);
    });
  });
});
