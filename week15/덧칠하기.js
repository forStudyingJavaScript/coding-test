function solution(n, m, section) {
  let painted = 0;
  let count = 0;
  
  section.forEach(s => {
      if (s > painted) {
          count ++;
          painted = s + m - 1;
      }
  });
  
  return count;
}

console.log(solution(8, 4, [2, 3, 6])) //2
console.log(solution(5, 4, [1, 3])) //1
console.log(solution(4, 1, [1, 2, 3, 4])) //4