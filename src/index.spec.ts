import { helloWorld } from './index';

describe('helloWorld', () => {
  it('should return a string', () => {
    const result = helloWorld();

    expect(typeof result).toBe('string');
  });

  it('should return "Hello, World!"', () => {
    const result = helloWorld();

    expect(result).toBe('Hello, World!');
  });
});
