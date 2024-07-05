function solution(n, lost, reserve) {
  const actualLost = lost.filter(student => !reserve.includes(student));
  const actualReserve = reserve.filter(student => !lost.includes(student));

  for (let lostStudent of actualLost) {
    let index = actualReserve.findIndex(reserveStudent => Math.abs(reserveStudent - lostStudent) === 1);
    if (index !== -1) {
      actualReserve.splice(index, 1);
    } else {
      n--;
    }
  }

  return n;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6])); //6