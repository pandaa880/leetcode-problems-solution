/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // create a hashmap for faster search
  const map = {};

  // add elements in the hashmap with their index
  nums.forEach((item, index) => {
    if (map[item] === undefined) {
      map[item] = index;
    }
  });

  // loop through each element
  // * if (x + y) = target then y = target - x, so we need to find that y
  for (let i = 0; i < nums.length; i++) {
    const y = target - nums[i];

    // can't count a element twice so it's index should not be same
    if (map[y] !== undefined && map[y] !== i) {
      return [i, map[y]];
    }
  }

  return [];
};

twoSum([3, 2, 4], 6);
