const solution = (s) => {
  const arr = s.split(' ');
  let res = 0;
  let lastValidNumber = 0;

  for (const item of arr) {
    if (item === 'Z') {
      res -= lastValidNumber;
      lastValidNumber = 0;
    } else {
      res += +item;
      lastValidNumber = +item;
    }
  }
  
  return res;
};
// TC = O(n); SC = O(1); 

// const solution = s => {
//     const stack = []

//     s.split(' ').forEach((target) => {
//         if(target === 'Z') stack.pop();
//         else stack.push(+target)
//     })

//     return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
// };


console.log(solution("1 2 Z 3")); //4
console.log(solution("10 20 30 40")); //100
console.log(solution("10 Z 20 Z 1")); //1
console.log(solution("10 Z 20 Z")); //0
console.log(solution("-1 -2 -3 Z")); //-3