
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

/****************************************** Thomas ********************************************************/
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

/****************************************** Flaffi ********************************************************/
// var findTwoSum = function(nums, target) {
//     let m1 = new Map();
//     let res = [];
//     nums.forEach((v,i => m1.set(v,i)))
//     nums.some((v,i) => {
//         if (m1.has(target-v)&&m1.get(target-v)!=i){
//             res= [m1.get(target-v),i]
//             return true;
//         }
//     })
//     return res;
// }

/****************************************** Lösung in Java ********************************************************/
// (Hier in Java kann gerne in Javascript mal umgewandelt werden)
// public int[] twoSum(int[] nums, int target) {
//     Map<Integer, Integer> map = new HashMap<>();
//     for (int i = 0; i < nums.length; i++) {
//         int complement = target - nums[i];
//         if (map.containsKey(complement)) {
//             return new int[] { map.get(complement), i };
//         }
//         map.put(nums[i], i);
//     }
//     // In case there is no solution, we'll just return null
//     return null;
// }
