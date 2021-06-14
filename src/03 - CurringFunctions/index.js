function MultiplyClosure(arr) {
  return function factor(item) {
    return arr.map(((element) => element * item));
  };
}

export default MultiplyClosure;
