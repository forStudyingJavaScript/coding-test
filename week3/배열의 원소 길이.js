const solution = (strlist) => strlist.map(str => str.length);
// TC = O(n) SC = O(n)

// const solution = (strlist) => {
//   let res = [];

//   for (const str of strlist) {
//     res.push(str.length);
//   }

//   return res;
// };
// // TC = O(n) SC = O(n)

console.log(solution(["We", "are", "the", "world!"])); //[2, 3, 3, 6]
console.log(solution(["I", "Love", "Programmers."])); //[1, 4, 12]