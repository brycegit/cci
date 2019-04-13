const binarySearch = (arr, itemToFind) => {
  const middle = Math.floor(arr.length / 2);

  if (arr[middle] === itemToFind) {
    return arr[middle];
  }

  if (arr.length <= 1) {
    return undefined;
  }

  if (arr[middle] > itemToFind) {
    return binarySearch(arr.slice(0, middle), itemToFind);
  }

  return binarySearch(arr.slice(middle), itemToFind);
};

module.exports = binarySearch;
