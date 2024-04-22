const solution = n => Array.from({ length: n }, (_, i) => i % 2 === 0? '수' : '박').join('');
// TC = O(n), SC = O(n) 

// const solution = n => ('수박').repeat(n / 2) + ((n % 2) ? '수' : '');
// // n을 2로나눈 몫 만큼 곱하고 나머지가 있으면 '수' 더해라.
// // TC = O(n), SC = O(n) 

console.log(solution(3)); //"수박수"
console.log(solution(4)); //"수박수박"