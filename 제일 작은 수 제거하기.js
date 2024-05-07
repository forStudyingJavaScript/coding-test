function solution(arr) {
  let min = Math.min(...arr);
  let res = arr.filter((el) => el !== min);
  return res.length === 0 ? [-1] : res;
}
