const quickSort = (arr, left = 0, right) => {
  // set initial right index to end of array
  right = right === undefined ? arr.length - 1 : right;

  // if indexes cross return arr
  if (left >= right) {
    return arr;
  }

  // start pivot at middle of array
  const pivot = Math.floor((left + right) / 2);

  // do swaps and get last left index
  const partitionIndex = sortPartition(arr, left, right, pivot);

  // recurse on left and right partitions
  quickSort(arr, left, partitionIndex - 1);
  quickSort(arr, partitionIndex, right);

  // return arr after recursibly going through quicksort
  return arr;
};

function sortPartition(arr, left, right, pivot) {
  // traverse arr from both left and right, but don't overlap
  while (left < right) {
    // find a left value to swap
    while (arr[left] < arr[pivot]) {
      left++;
    }
    // find a right value to swap
    while (arr[right] > arr[pivot]) {
      right--;
    }

    // if swappable values were found for left and right before crossing
    if (left < right) {
      swap(arr, left, right);
    }

    // move indexes inwards
    left++;
    right--;
  }

  return left;
}

function swap(array, left, right) {
  const leftTemp = array[left];

  array[left] = array[right];
  array[right] = leftTemp;
}

module.exports = quickSort;
