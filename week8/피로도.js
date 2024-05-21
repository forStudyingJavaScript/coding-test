function solution(k, dungeons) {
  const numberOfDungeons = dungeons.length;
  const visitedDungeons = new Array(numberOfDungeons).fill(0);
  let maxExploredDungeons = 0;

  function exploreDungeons(k, count) {
      maxExploredDungeons = Math.max(count, maxExploredDungeons);

      for (let i = 0; i < numberOfDungeons; i++) {
          const [required, cost] = dungeons[i];
          if (k >= required && !visitedDungeons[i]) {
              visitedDungeons[i] = true;
              exploreDungeons(k - cost, count + 1);
              visitedDungeons[i] = false;
          }
      }
  }

  exploreDungeons(k, 0);
  return maxExploredDungeons;
}

console.log(solution(80, [[80,20], [50,40], [30,10]])); // 3