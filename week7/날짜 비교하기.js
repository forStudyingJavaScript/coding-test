function solution(date1, date2) {
  if (date1[0] < date2[0] || (date1[0] === date2[0] && date1[1] < date2[1]) || (date1[0] === date2[0] && date1[1] === date2[1] && date1[2] < date2[2])) return 1;
  return 0;
}

// const solution = (date1, date2) => new Date(date1) < new Date(date2) ? 1 : 0;

console.log(solution([2021, 12, 28], [2021, 12, 29])); //1
console.log(solution([1024, 10, 24], [1024, 10, 24])); //0