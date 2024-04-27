const solution = (age) => {
  const alphabetList = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
  return [...age + ''].reduce((acc, index) => acc + alphabetList[index], '');
};
// TC = O(n), SC = O(n);

// const solution = (age) => {
//   const alphabetList = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
//   const ageStr = age + '';
  
//   let res = '';
//   for (let i = 0; i < ageStr.length; i++) {
//     res += alphabetList[ageStr[i]];
//   }

//   return res;
// };
// // TC = O(n), SC = O(n);

console.log(solution(23)); //'cd'
console.log(solution(51)); //'fb'
console.log(solution(100)); //'baa'