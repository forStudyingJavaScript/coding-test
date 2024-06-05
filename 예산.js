function solution(d, budget) {
  d.sort((a, b) => a - b);
  let res = 0;

  for (let i = 0; i < d.length; i++) {
    if (d[i] > budget) break;

    budget -= d[i];
    res += 1;
  }
  return res;
}
