function solution(n) {
  let res = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) res += "수";
    else res += "박";
  }
  return res;
}
