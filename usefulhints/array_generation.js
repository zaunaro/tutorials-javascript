// https://www.techiedelight.com/de/create-array-from-1-n-javascript/

const N = 1000;
const arr = Array.from(Array(N+1).keys());
console.log(arr);