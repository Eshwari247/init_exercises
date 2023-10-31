const Calculate = require('./mul');

describe('Calculate', () => {
  it('should multiply two numbers correctly', () => {
    expect(Calculate.multiply(2, 3)).toBe(6);
    expect(Calculate.multiply(0, 5)).toBe(0);
    expect(Calculate.multiply(-2, 4)).toBe(-8);
  });
});

