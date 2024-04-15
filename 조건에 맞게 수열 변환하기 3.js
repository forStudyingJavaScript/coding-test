function solution(arr, k) {
  if (k % 2 === 1) {
    return arr.map((e) => e * k);
  } else {
    return arr.map((e) => e + k);
  }
}

function solution(arr, k) {
  return k % 2 === 1 ? arr.map((e) => e * k) : arr.map((e) => e + k);
}
