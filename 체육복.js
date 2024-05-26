function solution(n, lost, reserve) {
  let lostStudent = lost.filter((el) => !reserve.includes(el)).sort();
  let reserveStudent = reserve.filter((el) => !lost.includes(el)).sort();

  for (let i = 0; i < reserveStudent.length; i++) {
    if (lostStudent.includes(reserveStudent[i] - 1))
      lostStudent = lostStudent.filter((el) => el !== reserveStudent[i] - 1);
    else if (lostStudent.includes(reserveStudent[i] + 1))
      lostStudent = lostStudent.filter((el) => el !== reserveStudent[i] + 1);
  }
  return n - lostStudent.length;
}
