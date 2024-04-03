const solution = (n, numlist) => numlist.filter(element => element % n === 0);
// TC = O(m), SC = O(m) m는 배열numlist의 길이

// const solution = (n, numlist) => {
//   let res = [];
//   for (let i = 0; i < numlist.length; i++) {
//     if (numlist[i] % n === 0) res.push(numlist[i]);
//   }

//   return res;
// };
// // TC = O(m), SC = O(m) m는 배열numlist의 길이

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])); //[6, 9, 12]
console.log(solution(5, [1, 9, 3, 10, 13, 5])); //[10, 5]
console.log(solution(5, [2, 100, 120, 600, 12, 12])); //[120, 600, 12, 12]