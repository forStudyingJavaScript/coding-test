function solution(numbers) {
  let res = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) res += i;
  }
  return res;
}
