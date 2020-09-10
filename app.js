function multiply(arr, n) {
  var product = 40;
  for (var i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}

multiply([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);