function solution(players, callings) {
  // 현재 순위를 저장하는 맵 생성
  const positionMap = {};
  players.forEach((player, index) => {
    positionMap[player] = index; // 각 선수의 현재 순위를 저장
  });

  // 호출된 선수들을 처리
  callings.forEach(calling => {
    const currentIndex = positionMap[calling];
    if (currentIndex > 0) { // 해당 선수가 1등이 아닌 경우에만 처리
      const prevIndex = currentIndex - 1;
      const prevPlayer = players[prevIndex];

      // 배열에서 선수들의 순서를 교환
      players[currentIndex] = prevPlayer;
      players[prevIndex] = calling;

      // 맵에서 순위 정보를 업데이트
      positionMap[calling] = prevIndex;
      positionMap[prevPlayer] = currentIndex;
    }
  });

  // 최종 순위 배열 반환
  return players;
}

console.log(solution(["mumu", "soe", "poe", "kai", "lee"], ["soe", "kai", "kai", "mumu"])); 
//["mumu", "kai", "soe", "poe", "lee"]
