function solution(n, lost, reserve) {
  let actualLost = lost.filter(student => !reserve.includes(student));
  let actualReserve = reserve.filter(student => !lost.includes(student));

  actualLost.sort((a, b) => a - b);
  actualReserve.sort((a, b) => a - b);

  for (let i = 0; i < actualLost.length; i++) {
    let index = actualReserve.findIndex(reserveStudent => Math.abs(reserveStudent - actualLost[i]) === 1);
    if (index !== -1) {
      actualReserve.splice(index, 1);
    } else {
      n--;
    }
  }

  return n;
}

// function solution(n, lost, reserve) {
//   return n - lost.filter(a => {
//       const b = reserve.find(r => Math.abs(r-a) <= 1);
//       if (!b) return true;
//       reserve = reserve.filter(r => r !== b);
//   }).length;
// }

// function solution(n, lost, reserve) {

//   for (let i = 0; i < lost.length; i++) {
//     let index = reserve.findIndex(reserveStudent => Math.abs(reserveStudent - lost[i]) <= 1);
//     if (index !== -1) {
//       reserve.splice(index, 1);
//     } else {
//       n--;
//     }
//   }

//   return n;
// }

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
