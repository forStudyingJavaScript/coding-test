function solution(s) {
  let arr = s.split(" ");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      res.pop();
    } else {
      res.push(+arr[i]);
    }
  }
  return res.reduce((acc, cur) => acc + cur, 0);
}
