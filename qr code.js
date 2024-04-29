function solution(q, r, code) {
  let res = "";
  for (let i = 0; i < code.length; i++) {
    if (i % q === r) res += code[i];
  }
  return res;
}

function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join("");
}
