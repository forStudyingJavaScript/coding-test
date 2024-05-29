function solution(price, money, count) {
  const res = price * (count + 1) * (count / 2) - money;
  return res > 0? res : 0;
}

console.log(solution(3, 20, 4)); //10