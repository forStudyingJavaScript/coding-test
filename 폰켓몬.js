function solution(nums) {
  let max = nums.length / 2;
  let set = [...new Set(nums)];
  return set.length > max ? max : set.length;
}
