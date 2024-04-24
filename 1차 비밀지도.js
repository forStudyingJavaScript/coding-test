function solution(n, arr1, arr2) {
  let res = [];
  for (let i = 0; i < n; i++) {
    const a = (arr1[i] | arr2[i]).toString(2).padStart(n, "0");
    const b = [];
    for (let j = 0; j < n; j++) {
      if (a[j] === "1") b.push("#");
      else b.push(" ");
    }
    res.push(b.join(""));
  }
  return res;
}
