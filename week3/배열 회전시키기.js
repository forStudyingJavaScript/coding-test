const solution = (numbers, direction) => {
  if (direction === 'right') return [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)];
  else return [...numbers.slice(1), numbers[0]];
};
// TC = O(n) SC = O(n)

// const solution = (numbers, direction) => {
//   if (direction === 'right') return numbers.map((_, index) => numbers[(index + numbers.length - 1) % numbers.length]);
//   else return numbers.map((_, index) => numbers[(index + 1) % numbers.length]);
// };
// // TC = O(n) SC = O(n)

// const solution = (numbers, direction) => {
//   let res = [];
//   if (direction === 'right') {
//     res.push(numbers[numbers.length - 1]);
//     for (let i = 0; i < numbers.length - 1; i++) res.push(numbers[i]);
//   } else {
//     for (let i = 1; i < numbers.length; i++) res.push (numbers[i]);
//     res.push(numbers[0]);
//   }

//   return res;
// };
// // TC = O(n) SC = O(n)

console.log(solution([1, 2, 3], 'right')); //[3, 1, 2]
console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left')); //[455, 6, 4, -1, 45, 6, 4]