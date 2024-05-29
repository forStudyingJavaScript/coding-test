function solution(lottos, win_nums) {
  const ranking = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6
  };
  // 로또 순위를 결정하기 위한 객체

  const knownMatches = lottos.filter(num => win_nums.includes(num)).length;
  // 당첨 번호와 일치하는 번호의 개수를 센다
  const zeroCount = lottos.filter(num => num === 0).length;
   // 알아볼 수 없는 번호(0)의 개수를 센다

  const maxMatches = knownMatches + zeroCount;
  // 최고 순위는 맞춘 번호 개수에 0의 개수를 더한 값으로 계산

  return [ranking[maxMatches], ranking[knownMatches]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]