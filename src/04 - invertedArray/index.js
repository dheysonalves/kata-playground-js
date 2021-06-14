const invertedArray = (arr) => {
  if (arr === []) return [];
  return arr.map((item) => item * (-1));
};

export default invertedArray;
