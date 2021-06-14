/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import ArrayBetween from './main';

describe('Array between two numbers', () => {
  // it('should return the file', () => {
  //   expect(ArrayBetween).to.exist;
  // });

  it('should return an empty array', () => {
    expect(ArrayBetween(7, 32, [1, 2, 3, 78])).to.be.an('array').that.is.empty;
  });

  it('should return an array with `[1, 2, 3]`', () => {
    expect(ArrayBetween(0, 9, [1, 2, 3, 78])).to.be.an('array').to.include.members([1, 2, 3]);
  });

  it('should return an array with `[0, 0, -3]`', () => {
    expect(ArrayBetween(-5, 3, [-8, 0, 0, 20, -3])).to.be.an('array').to.include.members([0, 0, -3]);
  });

  it('should return an array with `[0, 0, -3]`', () => {
    expect(ArrayBetween(1, 1, [1, 0, 3, 7])).to.be.an('array').that.is.empty;
  });
});
