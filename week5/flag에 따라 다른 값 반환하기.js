const solution = (a, b, flag) => flag === true? a + b : a - b;
// TC = O(1); SC = O(1); 

// const solution = (a, b, flag) => flag? a + b : a - b;

console.log(solution(-4, 7, true)); //3
console.log(solution(-4, 7, false)); //-11