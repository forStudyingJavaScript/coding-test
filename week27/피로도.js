function solution(k, dungeons) {
  const numberOfDungeons = dungeons.length;
  const visitedDungeons = new Array(numberOfDungeons).fill(0);
  let maxExploredDungeons = 0;
//   numberOfDungeons: 던전의 개수.
//   visitedDungeons: 던전의 방문 여부를 저장하는 배열, 초기값은 모두 0(false).
//   maxExploredDungeons: 최대 탐험할 수 있는 던전의 수를 저장하는 변수, 초기값은 0.

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
//   exploreDungeons(k, count): 현재 피로도 k와 현재 탐험한 던전의 수 count를 인자로 받아 재귀적으로 던전을 탐험하는 함수.
//   maxExploredDungeons 값을 현재 탐험한 던전의 수 count와 비교하여 최대값으로 업데이트합니다.
//   모든 던전에 대해 반복문을 돌며:
//   현재 피로도가 해당 던전의 "최소 필요 피로도" 이상이고, 해당 던전을 아직 방문하지 않았다면:
//   해당 던전을 방문 처리 (visitedDungeons[i] = true).
//   재귀적으로 피로도를 소모한 후 다음 던전을 탐험합니다 (exploreDungeons(k - cost, count + 1)).
//   탐험이 끝나면, 해당 던전의 방문을 취소하여 다른 경로를 탐험할 수 있도록 합니다 (visitedDungeons[i] = false).

  exploreDungeons(k, 0);
  return maxExploredDungeons;
}