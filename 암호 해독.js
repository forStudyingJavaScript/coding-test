function solution(cipher, code) {
  let arr = [...cipher];
  return arr.filter((e, i) => (i + 1) % code === 0).join("");
}

