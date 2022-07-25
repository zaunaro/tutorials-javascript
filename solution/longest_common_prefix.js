const aStrs1 = ["flower","flow","flight"];
const aStrs2 = ["dog","racecar","car"];

let test1 = findLongestCommonPrefix(aStrs1) === "fl"
  ? "Test 1: Success ✅"
  : "Test 1: Failed ❌";
let test2 = findLongestCommonPrefix(aStrs2) === ""
  ? "Test 2: Success ✅"
  : "Test 2: Failed ❌";

console.log(`${test1}\n${test2}`)

/****************************************** Thomas ********************************************************/
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

/****************************************** Devide and Conquer ********************************************************/
// (Hier in Java kann gerne in Javascript mal umgewandelt werden)
// 
// public String longestCommonPrefix(String[] strs) {
//     if (strs == null || strs.length == 0) return "";    
//         return longestCommonPrefix(strs, 0 , strs.length - 1);
// }
//
// private String longestCommonPrefix(String[] strs, int l, int r) {
//     if (l == r) {
//         return strs[l];
//     }
//     else {
//         int mid = (l + r)/2;
//         String lcpLeft =   longestCommonPrefix(strs, l , mid);
//         String lcpRight =  longestCommonPrefix(strs, mid + 1,r);
//         return commonPrefix(lcpLeft, lcpRight);
//    }
// }

/****************************************** Binary Search ********************************************************/
// (Hier in Java kann gerne in Javascript mal umgewandelt werden)
// public String longestCommonPrefix(String[] strs) {
//     if (strs == null || strs.length == 0)
//         return "";
//     int minLen = Integer.MAX_VALUE;
//     for (String str : strs)
//         minLen = Math.min(minLen, str.length());
//     int low = 1;
//     int high = minLen;
//     while (low <= high) {
//         int middle = (low + high) / 2;
//         if (isCommonPrefix(strs, middle))
//             low = middle + 1;
//         else
//             high = middle - 1;
//     }
//     return strs[0].substring(0, (low + high) / 2);
// }
//
// private boolean isCommonPrefix(String[] strs, int len){
//     String str1 = strs[0].substring(0,len);
//     for (int i = 1; i < strs.length; i++)
//         if (!strs[i].startsWith(str1))
//             return false;
//     return true;
// }