function solution(n) {
  let res = [];
  let num = n;
  while (num !== 1) {
    res.push(num);
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = 3 * num + 1;
    }
  }
  res.push(1);
  return res;
}
