import { expect } from 'chai';
import { calculate } from './main';

describe('Main', () => {
  it('should return `Fizz` if divisible by 3', () => {
    expect(calculate(9)).to.be.equal('Fizz');
  });

  it('should return `Buzz` if divisible by 5', () => {
    expect(calculate(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` if divisible by 3 and 5', () => {
    expect(calculate(15)).to.be.equal('FizzBuzz');
  });

  it('should return the number if not divisible by any', () => {
    expect(calculate(16)).to.be.equal(16);
  });

  it('should return the 0 when 0', () => {
    expect(calculate(0)).to.be.equal(0);
  });
});
