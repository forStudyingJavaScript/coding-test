const solution = (nums) => {
  const set = new Set(nums);
  return nums.length / 2 < set.size ? nums.length / 2 : set.size;
};

console.log(solution([3, 1, 2, 3])); //2
console.log(solution([3, 3, 3, 2, 2, 4])); //3
console.log(solution([3, 3, 3, 2, 2, 2])); //2