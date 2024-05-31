function solution(price, money, count) {
  let res = 0;
  for (let i = 1; i <= count; i++) {
    res = res + price * i;
  }
  return res < money ? 0 : res - money;
}
