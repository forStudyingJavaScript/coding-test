function solution(arr, query) {
  let res = [...arr];
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) res = res.slice(0, query[i] + 1);
    else res = res.slice(query[i]);
  }
  return res;
}

function solution(arr, query) {
  let res = [...arr];
  query.forEach((q, i) => {
    res = i % 2 === 0 ? res.slice(0, q + 1) : res.slice(q);
  });
  return res;
}
