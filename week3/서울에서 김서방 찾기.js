const solution = (seoul) => '김서방은 ' + seoul.indexOf('Kim') + '에 있다';
// TC = O(n) SC = O(1)

// const solution = (seoul) => {
//   let res = '';

//   for (let i = 0; i < seoul.length; i++) seoul[i] === 'Kim' ? res += i : '';
//   return '김서방은 ' + res + '에 있다';
// };
// // TC = O(n) SC = O(1)

console.log(solution(['Jane', 'Kim'])); //'김서방은 1에 있다'