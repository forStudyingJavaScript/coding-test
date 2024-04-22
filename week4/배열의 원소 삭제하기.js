const solution = (arr, delete_list) => arr.filter(el => !delete_list.includes(el));
// TC = O(n * m), SC = O(n) 

// const solution = (arr, delete_list) => arr.filter((v) => !new Set(delete_list).has(v));
// // TC = O(n * m), SC = O(n)

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])); //[293, 395, 678]
console.log(solution([110, 66, 439, 785, 1], [377, 823, 119, 43])); //[110, 66, 439, 785, 1]