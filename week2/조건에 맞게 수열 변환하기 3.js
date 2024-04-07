const solution = (arr, k) => arr.map(element => k % 2 === 0? element + k : element * k);
// TC = O(n), SC = O(n) n는 배열arr의 길이

// const solution = (arr, k) => {
//   let res = [];
//   for (const element of arr) k % 2 === 0? res.push(element + k) : res.push(element * k);

//   return res;
// };
// // TC = O(n), SC = O(n) n는 배열arr의 길이

console.log(solution([1, 2, 3, 100, 99, 98], 3)); //[3, 6, 9, 300, 297, 294]
console.log(solution([1, 2, 3, 100, 99, 98], 2)); //[3, 4, 5, 102, 101, 100]