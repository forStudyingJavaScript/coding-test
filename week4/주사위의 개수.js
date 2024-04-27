const solution = (box, n) => box.reduce((acc, current) => acc * Math.floor(current / n), 1);
// TC = O(1), SC = O(1) 

console.log(solution([1, 1, 1], 1)); //1
console.log(solution([10, 8, 6], 3)); //12