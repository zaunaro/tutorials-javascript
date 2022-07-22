// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109

// Only one valid answer exists.

const _ = require("lodash");

/* Test cases */

const aNums1 = [3, 2, 4];
const aNums2 = [2, 7, 11, 15];
const aNums3 = [3, 3];

let test1 = _.isEqual(findTwoSum(aNums1, 6), [1, 2])
  ? "Test 1: Success"
  : "Test 1: Failed";
let test2 = _.isEqual(findTwoSum(aNums2, 9), [0, 1])
  ? "Test 2: Success"
  : "Test 2: Failed";
let test3 = _.isEqual(findTwoSum(aNums3, 6), [0, 1])
  ? "Test 3: Success"
  : "Test 3: Failed";

console.log(`${test1}\n${test2}\n${test3}`);

/* -------------------------------------- */
function findTwoSum(aInput, iTarget) {
  let aResult = [];

  //  Brute-force Method O(n²)
  /* for (let i = 0; i < aInput.length; i++) {
    for (let j = i + 1; j < aInput.length; j++) {
      if (aInput[i] + aInput[j] === iTarget) {
        aResult.push(i, j);
      }
    }
  } */

  // More optimized version
  let Set = new Set();

  for (let i = 0; i < aInput.length; i++) {
    let iFindNumber = iTarget - aInput[i];

    if (Set.has(iFindNumber)) {
      aResult.push(aInput.indexOf(iFindNumber), i);
    }

    Set.add(aInput[i]);
  }

  return aResult;
}
