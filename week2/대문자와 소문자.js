const solution = (my_string) => {
  return my_string.replace(/[a-zA-Z]/g, (char) => 
    char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase());
};
// TC = O(n), SC = O(n) n는 문자열my_string의 길이 

// const solution = (my_string) => {
//   let res = '';
//   for (const char of my_string) {
//     if(char === char.toLowerCase()) res += char.toUpperCase();
//     else res += char.toLowerCase();
//   }

//   return res;
// };
// TC = O(n), SC = O(n) n는 문자열my_string의 길이 

console.log(solution('cccCCC')); //'CCCccc'
console.log(solution('abCdEfghlJ')); //'ABcDeFGHij'