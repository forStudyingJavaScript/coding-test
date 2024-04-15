const solution = (a, b) => (a + b) * ((Math.abs(b - a) + 1) / 2);
// TC = O(1), SC = O(1)

console.log(solution(3, 5)); //12
console.log(solution(3, 3)); //3
console.log(solution(5, 3)); //12