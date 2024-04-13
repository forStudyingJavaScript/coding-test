const solution = (x, n) => Array.from({ length: n }, (_, i) => (i + 1) * x);
// TC = O(n) SC = O(n)

// const solution = (x, n) => {
//   let res = [];

//   for (let i = 1; i <= n; i++) res.push(i * x);

//   return res;
// };
// // // TC = O(n) SC = O(n)

console.log(solution(2, 5)); //[2, 4, 6, 8, 10]
console.log(solution(4, 3)); //[4, 8, 12]
console.log(solution(-4, 2)); //[-4, -8]