const request = require('supertest');
const app = require('./app');

describe('GET /cal', () => {
  it('should return 0', async () => {
    const response = await request(app).get('/cal');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ answer: '0' });
  });
});

describe('POST /cal', () => {
  it('should return the result of multiplication', async () => {
    const response = await request(app)
      .post('/cal')
      .send({ A: 1, B: 2 });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ answer: '2' });
  });
});

