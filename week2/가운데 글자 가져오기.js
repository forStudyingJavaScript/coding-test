const solution = s => {
  const strLength = s.length;
  return strLength % 2 === 0? s.slice((strLength / 2) - 1, (strLength / 2) + 1) : s[Math.floor(strLength / 2)];
};

// TC = O(1), SC = O(n) n는 문자열s의 길이

console.log(solution('abcde')); // 'c'
console.log(solution('qwer')); // 'we'