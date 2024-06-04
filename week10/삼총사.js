function solution(number) {
  let count = 0;

  function findCombination(start, depth, sum) {
    if (depth === 3) {
      if (sum === 0) {
        count++;
      }
      return;
    }

    for (let i = start; i < number.length; i++) {
      findCombination(i + 1, depth + 1, sum + number[i]);
    }
  }

  findCombination(0, 0, 0);

  return count;
}

// start=0, depth=0, sum=0
//   |- start=1, depth=1, sum=-2
//       |- start=2, depth=2, sum=1
//           |- start=3, depth=3, sum=1 (return)
//           |- start=4, depth=3, sum=3 (return)
//           |- start=5, depth=3, sum=-4 (return)
//       |- start=3, depth=2, sum=-2
//           |- start=4, depth=3, sum=0 (count++)
//           |- start=5, depth=3, sum=-7 (return)
//       |- start=4, depth=2, sum=-7
//           |- start=5, depth=3, sum=-12 (return)
//   |- start=2, depth=1, sum=3
//       |- start=3, depth=2, sum=3
//           |- start=4, depth=3, sum=5 (return)
//           |- start=5, depth=3, sum=-2 (return)
//       |- start=4, depth=2, sum=0
//           |- start=5, depth=3, sum=-5 (return)
//   |- start=3, depth=1, sum=0
//       |- start=4, depth=2, sum=2
//           |- start=5, depth=3, sum=-3 (return)
//   |- start=4, depth=1, sum=-5
//       |- start=5, depth=2, sum=-10 (return)


console.log(solution([-2, 3, 0, 2, -5])); //2
console.log(solution([-3, -2, -1, 0, 1, 2, 3])); //5
console.log(solution([-1, 1, -1, 1])); //0
