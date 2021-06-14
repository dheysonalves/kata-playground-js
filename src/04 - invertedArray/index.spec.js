import { expect } from 'chai';
import InvertedArray from './index';


describe('an inverted array', () => {
  it('should return an inverted array', (done) => {
    expect(InvertedArray([1, 2, -3, 5, -9])).to.be.an('array').to.include.members([-1, -2, 3, -5, 9]);
    done();
  });

  it('should return an empty array', (done) => {
    expect(InvertedArray([])).to.be.an('array').to.include.members([]);
    done();
  });
});
