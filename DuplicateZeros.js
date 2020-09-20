/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in place instead
 */
function duplicateZeros(arr) {
  const l = arr.length - 1;

  // loop through the array
  for (let i = 0; i <= l; i++) {
    // whenever we find 0 at any index
    if (arr[i] === 0) {
      /* start from end of the array until the (index of 0 + 1) and move all those elements to right.
       while moving those elements check if the last most index is going beyond the final array length */
      for (let j = l; j > i; j--) {
        if (j + 1 <= l) {
          arr[j + 1] = arr[j];
        }
      }
      /* while moving those elements check if the index at which we are placing additional 0
       is going beyond the final array length */
      if (i + 1 <= l) {
        arr[i + 1] = 0;
      }
      i = i + 1;
    }
  }
}

// const nums = [1, 0, 2, 3, 0, 4, 5, 0];
// const nums = [0, 0, 0, 0, 0, 0, 0];
const nums = [0, 0, 0, 1, 2, 3, 4, 5];

duplicateZeros(nums);
