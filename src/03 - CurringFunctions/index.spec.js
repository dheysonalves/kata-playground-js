import { expect } from 'chai';
import MultiplyClosure from './index';

describe('which takes a array arr of integers as an argument.', () => {
  it('should return an array multiply by 2', (done) => {
    expect(MultiplyClosure([1, 2, 3])(2)).to.be.an('array').to.include.members([2, 4, 6]);
    done();
  });

  it('should return an array multiply by 10', (done) => {
    expect(MultiplyClosure([4, 6, 5])(10)).to.be.an('array').to.include.members([40, 60, 50]);
    done();
  });
});
