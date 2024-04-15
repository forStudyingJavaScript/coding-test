const solution = (numbers) => {
  return Array.from({ length: 9 }, (_, i) => i + 1)
              .filter(el => !numbers.includes(el))
              .reduce((sum, current) => sum + current, 0);
};
// TC = O(n), SC = O(1);

// const solution = (numbers) => {
//   const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let sum = 0;

//   for (let i = 0; i < numList.length; i++) {
//     let found = false;

//     for (let j = 0; j < numbers.length; j++) {
//       if (numList[i] === numbers[j]) {
//         found = true;
//         break;
//       }
//     }

//     if (!found) sum += numList[i];
//   }

//   return sum;
// };
// // TC = O(n), SC = O(1);

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); //14
console.log(solution([5, 8, 4, 0, 6, 7, 9])); //6