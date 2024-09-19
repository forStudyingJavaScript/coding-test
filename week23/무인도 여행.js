function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  
  // 방문 여부를 기록할 배열
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  // 상, 하, 좌, 우 이동을 위한 방향 벡터
  const directions = [
      [0, 1],   // 오른쪽
      [0, -1],  // 왼쪽
      [1, 0],   // 아래쪽
      [-1, 0],  // 위쪽
  ];

  // DFS 함수 정의
  const dfs = (x, y) => {
      let stack = [[x, y]];
      visited[x][y] = true;
      let food = parseInt(maps[x][y]);

      while (stack.length > 0) {
          const [curX, curY] = stack.pop();

          for (const [dx, dy] of directions) {
              const newX = curX + dx;
              const newY = curY + dy;

              // 유효한 좌표인지, 방문하지 않았는지, 섬인지 확인
              if (
                  newX >= 0 && newX < rows &&
                  newY >= 0 && newY < cols &&
                  !visited[newX][newY] &&
                  maps[newX][newY] !== 'X'
              ) {
                  visited[newX][newY] = true;
                  stack.push([newX, newY]);
                  food += parseInt(maps[newX][newY]);
              }
          }
      }

      return food;
  };

  const result = [];

  // 지도를 순회하며 섬을 찾고, DFS로 탐색
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (!visited[i][j] && maps[i][j] !== 'X') {
              // 새로운 섬을 발견하면 DFS를 통해 섬의 식량을 계산
              result.push(dfs(i, j));
          }
      }
  }

  // 결과 배열을 오름차순으로 정렬하여 반환
  return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}

console.log(solution(["X591X","X1X5X","X231X", "1XXX1"]));  // 예상 출력: [1, 1, 27]
console.log(solution(["XXX","XXX","XXX"]));  // 예상 출력: [-1]