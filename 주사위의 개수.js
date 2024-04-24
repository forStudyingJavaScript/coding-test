function solution(box, n) {
  let res = 1;
  for (let i = 0; i < box.length; i++) {
    res *= Math.trunc(box[i] / n);
  }
  return res;
}

function solution(box, n) {
  return box.reduce((acc, el) => acc * Math.trunc(el / n), 1);
}
