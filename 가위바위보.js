function solution(rsp) {
  let res = "";
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === "2") res += "0";
    else if (rsp[i] === "0") res += "5";
    else res += "2";
  }
  return res;
}

function solution(rsp) {
  return [...rsp]
    .map((el) => (el === "2" ? 0 : el === "0" ? "5" : "2"))
    .join("");
}
