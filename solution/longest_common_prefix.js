// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/* Test cases */

const aStrs1 = ["flower","flow","flight"];
const aStrs2 = ["dog","racecar","car"];

let test1 = findLongestCommonPrefix(aStrs1) === "fl"
  ? "Test 1: Success ✅"
  : "Test 1: Failed ❌";
let test2 = findLongestCommonPrefix(aStrs2) === ""
  ? "Test 2: Success ✅"
  : "Test 2: Failed ❌";

console.log(`${test1}\n${test2}`)

/* -------------------------------------- */
function findLongestCommonPrefix(aInput) {
  let sResult = "";

  let aCheckPrefix = [...aInput[0]];

  aCheckPrefix.forEach((sLetter) => {
    let bCheck = true;

    aInput.forEach((sInput) => {
      if (sLetter != sInput[aCheckPrefix.indexOf(sLetter)]) {
        bCheck = false;
      }
    });

    if (bCheck) {
      sResult += sLetter;
    } else {
      return;
    }
  });

  return sResult;
}
