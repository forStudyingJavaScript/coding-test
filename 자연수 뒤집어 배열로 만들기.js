function solution(n) {
  let str = n + "";
  let res = [];
  for (let i = str.length - 1; i >= 0; i--) {
    res.push(+str[i]);
  }
  return res;
}

function solution(n) {
  let str = n + "";
  return [...str].reverse().map((v) => +v);
}
