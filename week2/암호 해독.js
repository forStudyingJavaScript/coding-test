const solution = (cipher, code) => [...cipher].filter((_, i) => (i + 1) % code === 0).join('');
// TC = O(n), SC = O(n), n는 문자열cipher의 길이

// const solution = (cipher, code) => {
//   let res = '';
//   for (let i = code; i <= cipher.length; i += code) res += cipher[i - 1];

//   return res;
// };
// // TC = O(n), SC = O(n), n는 문자열cipher의 길이

console.log(solution("dfjardstddetckdaccccdegk", 4));
console.log(solution("pfqallllabwaoclk", 2));