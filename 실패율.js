function solution(N, stages) {
  let res = [];
  for (let i = 1; i <= N; i++) {
    let all = stages.filter((el) => el >= i).length;
    let notClear = stages.filter((el) => el === i).length;
    res.push([i, notClear / all]);
  }
  res.sort((a, b) => b[1] - a[1]);
  return res.map((el) => el[0]);
}
