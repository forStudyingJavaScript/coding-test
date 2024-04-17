function solution(age) {
  let alpa = "abcdefghij";
  return [...(age + "")].map((e) => alpa[+e]).join("");
}
